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
                <div className="player_controlzone">
                    <div className="player_backdrop--active player_backdrop-top"></div>
                    <div className="player_backdrop--active player_backdrop-bottom"></div>
                    <div className="player__control_top">
                        <div className="player__control-buttons">
                            <button className="player__control-button">
                                <i className="fa fa-angle-left player__control-button-icon" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                    <div className="player__control_bottom">
                        <div className="player__control-progress-container">
                            <div className="player__control-progress-bar">
                                <div className="scrubber-container">
                                    <div className="scrubber-bar">
                                        <div className="scrubber__track">
                                            <div className="scrubber__buffered"></div>
                                            <div className="scrubber__progress"></div>
                                            <div className="scrubber__play_head"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="player__control-progress-time">
                                <div className="player__control-time_remaining">
                                    13:26
                                </div>
                            </div>
                        </div>
                        <div className="player__control-buttons">
                            <button className="player__control-button">
                                <i className="fa fa-pause player__control-button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="player__control-button">
                                <i className="fa fa-backward player__control-button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="player__control-button">
                                <i className="fa fa-forward player__control-button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="player__control-button">
                                <i className="fa fa-volume-up player__control-button-icon" aria-hidden="true"></i>
                            </button>
                            <div className="player__control-title">
                                La La Land
                            </div>
                            <button className="player__control-button">
                                <i className="fa fa-question-circle-o player__control-button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="player__control-button">
                                <i className="fa fa-cc player__control-button-icon" aria-hidden="true"></i>
                            </button>
                            <button className="player__control-button">
                                <i className="fa fa-expand player__control-button-icon" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
