import React, { RefObject, SyntheticEvent } from "react";
import "./Player.scss";
import { Link } from "react-router-dom";
import { secondsToTime } from "../../../cine_engine/misc/utils";

type PlayerProps = {};
type PlayerState = {
    title: string;
    currentTime: number;
    playing: boolean;
    duration: number;
    peekPosition: number;
};
const initialState: PlayerState = {
    title: "Labyrinth",
    playing: false,
    currentTime: 0,
    duration: 1,
    peekPosition: 0
};

class Player extends React.Component<PlayerProps, PlayerState> {
    videoRef: RefObject<HTMLVideoElement>;
    scrubberRef: RefObject<HTMLDivElement>;

    constructor(props: PlayerProps) {
        super(props);
        this.state = initialState;
        this.videoRef = React.createRef();
        this.scrubberRef = React.createRef();
    }

    componentDidMount() {
        const videoElement = this.videoRef.current;
        (window as any).video = videoElement;
        if (videoElement != null) {
            videoElement.onpause = (event) => {
                this.setState({
                    playing: false
                });
            };
            videoElement.onplay = (event) => {
                this.setState({
                    playing: true
                });
            };
            videoElement.ontimeupdate = (event) => {
                this.setState({
                    currentTime: videoElement.currentTime,
                    duration: videoElement.duration
                });
            };
        }
    }

    componentWillUnmount() {
        const videoElement = this.videoRef.current;
        if (videoElement != null) {
            videoElement.onpause = null;
            videoElement.onplay = null;
            videoElement.ontimeupdate = null;
        }
    }

    handlePlayPauseClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        const videoElement = this.videoRef.current;
        if (videoElement != null) {
            if (videoElement.paused) {
                videoElement.play();
            } else {
                videoElement.pause();
            }
        }
    }

    handleFullscreenClick = (event: SyntheticEvent<HTMLButtonElement>) => {
        
    }

    handleProgressPeekHover = (event: SyntheticEvent<HTMLDivElement>) => {
        const mouseEvent = event.nativeEvent as MouseEvent;
        const container = this.scrubberRef.current;
        const { duration } = this.state;
        if (mouseEvent != null && container != null) {
            const localPosition = mouseEvent.x - container.getBoundingClientRect().x;
            const selectedPercent = localPosition / container.offsetWidth;
            const peekPosition = selectedPercent * duration;
            this.setState({
                peekPosition
            });
        }
    }

    handleProgressPeekClick = (event: SyntheticEvent<HTMLDivElement>) => {
        console.log('do peek');
    }

    getCurrentClock = () => {
        const { currentTime, duration } = this.state;
        return secondsToTime(duration - currentTime);
    }

    getProgressPercent = () => {
        const { currentTime, duration } = this.state;
        return (currentTime / duration) * 100;
    }

    getPeekPercent = () => {
        const { peekPosition, duration } = this.state;
        return (peekPosition / duration) * 100;
    }

    getBufferedPercent = () => {
        const videoElement = this.videoRef.current;
        let max = 0;
        if (videoElement != null) {
            for (let i = 0; i < videoElement.buffered.length; i++) {
                const current = videoElement.buffered.end(i);
                if (current > max) {
                    max = current;
                }
            }
            return (max / videoElement.duration) * 100;
        }
        return 0;
    }

    render() {
        const { playing, title } = this.state;
        const playButtonState = playing ? "pause" : "play";

        return (
            <div className="player">
                <video ref={this.videoRef} className="player__video">
                    <source src="http://filmstock.tv/Labyrinth.1986.720p.BluRay.x264.YIFY.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="player__control-zone">
                    <div className="player__backdrop--active player__backdrop-top"></div>
                    <div className="player__backdrop--active player__backdrop-bottom"></div>
                    <div className="control__top">
                        <div className="control__buttons">
                            <Link to="/">
                                <button className="control__button">
                                    <i className="fa fa-angle-left control__button-icon" aria-hidden="true"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="control__bottom">
                        <div className="control__progress-container">
                            <div className="control__progress-bar">
                                <div className="scrubber__container" onMouseOver={this.handleProgressPeekHover}>
                                    <div className="scrubber__bar">
                                        <div className="scrubber__track" ref={this.scrubberRef} onClick={this.handleProgressPeekClick}>
                                            <div className="scrubber__buffered" style={{ width: this.getBufferedPercent() + "%" }}></div>
                                            <div className="scrubber__progress" style={{ width: this.getProgressPercent() + "%" }}></div>
                                            <div className="scrubber__play-head" style={{ width: this.getPeekPercent() + "%" }}></div>
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
                                <i className="fa fa-expand control__button-icon" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
