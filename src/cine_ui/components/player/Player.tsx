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
    bufferedTime: number; //seconds
    fullscreen: boolean;
};
const initialState: PlayerState = {
    playing: false,
    currentTime: 0,
    durationTime: -1,
    peekPosition: -1,
    bufferedTime: -1,
    fullscreen: false,
};

class Player extends React.Component<PlayerProps, PlayerState> {
    videoRef: RefObject<HTMLVideoElement>;
    scrubberRef: RefObject<HTMLDivElement>;
    mainPlayerRef: RefObject<HTMLDivElement>;
    cinePlayer?: CinePlayer;

    constructor(props: PlayerProps) {
        super(props);
        this.state = initialState;
        this.videoRef = React.createRef();
        this.scrubberRef = React.createRef();
        this.mainPlayerRef = React.createRef();
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
        const onTimeUpdate = (currentTime: number, durationTime: number, bufferedTime: number) => {
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
            this.mainPlayerRef.current.addEventListener('fullscreenchange', (event) => {
                this.setState({
                    fullscreen: document.fullscreenElement != null,
                });
            });
        }
    }

    componentWillUnmount() {
        if (this.cinePlayer != null) {
            this.cinePlayer.dispose();
        }
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

    getCurrentClock = () => {
        const { currentTime, durationTime } = this.state;
        if (durationTime === -1) {
            return secondsToTime(0);
        }
        return secondsToTime(durationTime - currentTime);
    }

    getProgressPercent = () => {
        const { currentTime, durationTime } = this.state;
        if (durationTime === -1) {
            return 0;
        }
        return (currentTime / durationTime) * 100;
    }

    getPlayHeadPercent = () => {
        const { durationTime, peekPosition } = this.state;
        if (peekPosition === -1 || durationTime === -1) {
            return this.getProgressPercent();
        }
        return (peekPosition / durationTime) * 100;
    }

    getBufferedPercent = () => {
        const { bufferedTime, durationTime } = this.state;
        if (durationTime === -1) {
            return 0;
        }
        return (bufferedTime / durationTime) * 100;
    }

    handlePlayPauseClick = () => {
        if (this.cinePlayer != null) {
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

    renderProgressBar() {
        return (
            <div className="control__progress-container">
                <div className="control__progress-bar">
                    <div className="scrubber__container" onMouseMove={this.handleProgressPeekMove} onMouseEnter={this.handleProgressPeekStart} onMouseLeave={this.handleProgressPeekStop}>
                        <div className="scrubber__bar">
                            <div className="scrubber__track" ref={this.scrubberRef} onClick={this.handleProgressPeekClick}>
                                <div className="scrubber__buffered" style={{ width: this.getBufferedPercent() + "%" }}></div>
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
                <button className="control__button">
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
        const { unsupportedHtmlVideo } = CineEnvironment.getCine().cineUniversal.player;

        return (
            <div ref={this.mainPlayerRef} className="player">
                <video ref={this.videoRef} className="player__video">
                    <source src={src} type={type} />
                    {unsupportedHtmlVideo}
                </video>

                <div className="player__control-zone">
                    <div className="player__backdrop--active player__backdrop-top"></div>
                    <div className="player__backdrop--active player__backdrop-bottom"></div>
                    <div className="control__top">
                        <div className="control__buttons">
                            <Link to={Constants.PAGES.HOME.url}>
                                <button className="control__button">
                                    <i className="fa fa-angle-left control__button-icon" aria-hidden="true"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="control__bottom">
                        {this.renderProgressBar()}
                        {this.renderControlButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;