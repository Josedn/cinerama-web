import React from "react";
import "./Player.scss";

type PlayerProps = {};
type PlayerState = {};

class Player extends React.Component<PlayerProps, PlayerState> {
    render() {
        return (
            <div className="player">
                <video className="player__video">
                    <source src="/media/sample_video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="player__control-zone">
                    <div className="player__backdrop--active player__backdrop-top"></div>
                    <div className="player__backdrop--active player__backdrop-bottom"></div>
                    <div className="control__top">
                        <div className="control__buttons">
                            <button className="control__button">
                                <i className="fa fa-angle-left control__button-icon" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="control__bottom">
                        <div className="control__progress-container">
                            <div className="control__progress-bar">
                                <div className="scrubber-container">
                                    <div className="scrubber-bar">
                                        <div className="scrubber__track">
                                            <div className="scrubber__buffered"></div>
                                            <div className="scrubber__progress"></div>
                                            <div className="scrubber__play-head"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="control__progress-time">
                                <div className="control__time-remaining">
                                    13:26
                                </div>
                            </div>
                        </div>
                        <div className="control__buttons">
                            <button className="control__button">
                                <i className="fa fa-pause control__button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="control__button">
                                <i className="fa fa-backward control__button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="control__button">
                                <i className="fa fa-forward control__button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="control__button">
                                <i className="fa fa-volume-up control__button-icon" aria-hidden="true"></i>
                            </button>
                            <div className="control__title">
                                La La Land
                            </div>
                            <button className="control__button">
                                <i className="fa fa-question-circle-o control__button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="control__button">
                                <i className="fa fa-cc control__button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="control__button">
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
