import React, { RefObject, SyntheticEvent } from "react";
import "./Player.scss";
import Movie from "../../../cine_engine/ui_models/Movie";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import { Link } from "react-router-dom";
import Constants from "../../../cine_engine/misc/Constants";
import CinePlayer from "../../../cine_engine/cine_player/CinePlayer";
import { secondsToTime } from "../../../cine_engine/misc/utils";

type PlayerProps = {
    movie: Movie;
    src: string;
    type: string;
};
type PlayerState = {
    playing: boolean;
    currentTime: number; //seconds
    durationTime: number; //seconds
    peekPosition: number; //seconds
    bufferedTime: TimeRanges; //seconds
    fullscreen: boolean;
    showingMenu: boolean;
};
const initialState: PlayerState = {
    playing: false,
    currentTime: 0,
    durationTime: -1,
    peekPosition: -1,
    bufferedTime: { end: () => 0, length: 0, start: () => 0 },
    fullscreen: false,
    showingMenu: true,
};

class Player extends React.Component<PlayerProps, PlayerState> {
    videoRef: RefObject<HTMLVideoElement>;
    scrubberRef: RefObject<HTMLDivElement>;
    mainPlayerRef: RefObject<HTMLDivElement>;
    cinePlayer?: CinePlayer;
    showMenuTimeoutId: number;

    constructor(props: PlayerProps) {
        super(props);
        this.state = initialState;
        this.videoRef = React.createRef();
        this.scrubberRef = React.createRef();
        this.mainPlayerRef = React.createRef();
        this.showMenuTimeoutId = 0;
    }

    componentDidMount() {
        const onPause = () => {
            this.setState({
                playing: false,
            });
        };
        const onPlay = () => {
            this.setState({
                playing: true,
            });
        };
        const onTimeUpdate = (currentTime: number, durationTime: number, bufferedTime: TimeRanges) => {
            this.setState({
                currentTime,
                durationTime,
                bufferedTime
            });
        };
        if (this.videoRef.current != null) {
            this.cinePlayer = new CinePlayer(this.videoRef.current, onPause, onPlay, onTimeUpdate);
        }
        if (this.mainPlayerRef.current != null) {
            this.mainPlayerRef.current.addEventListener('fullscreenchange', event => {
                this.setState({
                    fullscreen: document.fullscreenElement != null,
                });
            });

            this.mainPlayerRef.current.addEventListener('mousemove', event => {
                this.showMenu();
            });

            this.mainPlayerRef.current.addEventListener('dblclick', event => {
                this.handleFullscreenClick();
            });
        }
    }

    componentWillUnmount() {
        if (this.cinePlayer != null) {
            this.cinePlayer.dispose();
        }
    }

    showMenu() {
        clearTimeout(this.showMenuTimeoutId);
        this.setState({
            showingMenu: true,
        });

        const intervalId = setTimeout(() => {
            this.setState({
                showingMenu: false,
            });
        }, 3000) as any; //NodeJS.Timeout --> number

        this.showMenuTimeoutId = intervalId;
    }

    handleProgressPeekMove = (event: SyntheticEvent<HTMLDivElement>) => {
        const mouseEvent = event.nativeEvent as MouseEvent;
        const container = this.scrubberRef.current;
        const { durationTime } = this.state;
        if (mouseEvent != null && container != null && durationTime !== -1) {
            const localPosition = mouseEvent.x - container.getBoundingClientRect().x;
            const selectedPercent = localPosition / container.offsetWidth;
            const peekPosition = selectedPercent * durationTime;
            this.setState({
                peekPosition,
            });
        }
    }

    handleProgressPeekStart = () => {

    }

    handleProgressPeekStop = () => {
        this.setState({
            peekPosition: -1,
        });
    }

    isPeeking() {
        return this.state.peekPosition >= 0;
    }

    getCurrentClock = () => {
        const { currentTime, durationTime, peekPosition } = this.state;
        if (durationTime === -1) {
            return secondsToTime(0);
        }
        if (this.isPeeking()) {
            return secondsToTime(peekPosition);
        }
        return secondsToTime(durationTime - currentTime);
    }

    calculateTimePercent = (seconds: number) => {
        const { durationTime } = this.state;
        if (durationTime < 1) {
            return 0;
        }
        return (seconds / durationTime) * 100;
    }

    getProgressPercent = () => {
        const { currentTime } = this.state;
        return this.calculateTimePercent(currentTime);
    }

    getPlayHeadPercent = () => {
        const { peekPosition } = this.state;
        if (this.isPeeking()) {
            return this.calculateTimePercent(peekPosition);
        }
        return this.getProgressPercent();
    }

    handlePlayPauseClick = () => {
        if (this.cinePlayer != null) {
            this.showMenu();
            this.cinePlayer.doPlayPause();
        }
    }

    handleProgressPeekClick = () => {
        const { peekPosition } = this.state;
        if (peekPosition >= 0 && this.cinePlayer != null) {
            this.cinePlayer.doSetTime(peekPosition);
        }
    }

    handleFullscreenClick = () => {
        const { fullscreen } = this.state;
        if (this.mainPlayerRef.current != null) {
            if (fullscreen) {
                document.exitFullscreen();
            } else {
                this.mainPlayerRef.current.requestFullscreen();
            }
        }
    }

    handleMiscClick = () => {
        const { showingMenu } = this.state;
        this.setState({
            showingMenu: !showingMenu
        });
    }

    renderBufferedProgress = () => {
        const { bufferedTime, durationTime } = this.state;
        const nodes: React.ReactNode[] = [];
        if (durationTime === -1) {
            return nodes;
        }
        for (let i = 0; i < bufferedTime.length; i++) {
            const start = this.calculateTimePercent(bufferedTime.start(i));
            const end = this.calculateTimePercent(bufferedTime.end(i)) - start;
            nodes.push(<div key={i} className="scrubber__buffered" style={{ left: start + "%", width: end + "%" }}></div>);
        }
        return nodes;
    }

    renderProgressBar() {
        return (
            <div className="control__progress-container">
                <div className="control__progress-bar">
                    <div className="scrubber__container" onMouseMove={this.handleProgressPeekMove} onMouseEnter={this.handleProgressPeekStart} onMouseLeave={this.handleProgressPeekStop}>
                        <div className="scrubber__bar">
                            <div className="scrubber__track" ref={this.scrubberRef} onClick={this.handleProgressPeekClick}>
                                {this.renderBufferedProgress()}
                                <div className="scrubber__progress" style={{ width: this.getPlayHeadPercent() + "%" }}></div>
                                <div className="scrubber__play-head" style={{ width: this.getPlayHeadPercent() + "%" }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="control__progress-time">
                    <div className="control__time-remaining">
                        {this.getCurrentClock()}
                    </div>
                </div>
            </div>
        );
    }

    renderControlButtons() {
        const { movie } = this.props;
        const { playing, fullscreen } = this.state;
        const playButtonState = playing ? "pause" : "play";
        const fullscreenButtonState = fullscreen ? "compress" : "expand";

        const title = movie.title;

        return (
            <div className="control__buttons">
                <button className="control__button" onClick={this.handlePlayPauseClick}>
                    <i className={"fa fa-" + playButtonState + " control__button-icon"} aria-hidden="true"></i>
                </button>
                <button className="control__button">
                    <i className="fa fa-volume-up control__button-icon" aria-hidden="true"></i>
                </button>
                <div className="control__title">
                    {title}
                </div>
                <button className="control__button" onClick={this.handleMiscClick}>
                    <i className="fa fa-question-circle-o control__button-icon" aria-hidden="true"></i>
                </button>
                <button className="control__button">
                    <i className="fa fa-cc control__button-icon" aria-hidden="true"></i>
                </button>
                <button className="control__button" onClick={this.handleFullscreenClick}>
                    <i className={"fa fa-" + fullscreenButtonState + " control__button-icon"} aria-hidden="true"></i>
                </button>
            </div>
        );
    }

    render() {
        const { src, type } = this.props;
        const { showingMenu } = this.state;
        const { unsupportedHtmlVideo } = CineEnvironment.getCine().cineUniversal.player;

        const backdropClass = showingMenu ? "player__backdrop--active" : "";
        const controlsClass = showingMenu ? "control--active" : "";

        return (
            <div ref={this.mainPlayerRef} className="player">
                <video ref={this.videoRef} className="player__video" autoPlay>
                    <source src={src} type={type} />
                    {unsupportedHtmlVideo}
                </video>

                <div className="player__control-zone">
                    <div className={"player__backdrop-top " + backdropClass}></div>
                    <div className={"player__backdrop-bottom " + backdropClass}></div>
                    <img
                        className={"control__logo " + controlsClass}
                        src="/images/filmstock_white.svg"
                        alt="Filmstock"
                    ></img>
                    <div className={"control__top " + controlsClass}>
                        <div className="control__buttons">
                            <Link to={Constants.PAGES.HOME.url}>
                                <button className="control__button">
                                    <i className="fa fa-angle-left control__button-icon" aria-hidden="true"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className={"control__bottom " + controlsClass}>
                        {this.renderProgressBar()}
                        {this.renderControlButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;