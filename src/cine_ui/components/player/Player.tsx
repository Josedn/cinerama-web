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
                    <div className="player__control_bottom">
                        <div className="player__control-progress">

                        </div>
                        <div className="player__control-buttons">
                            <button className="player__control-button">
                                <i className="fa fa-play player__control-button-icon" aria-hidden="true"></i>
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
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
