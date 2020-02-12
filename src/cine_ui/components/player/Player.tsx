import React from "react";
import "./Player.scss";

type PlayerProps = {};
type PlayerState = {};

class Player extends React.Component<PlayerProps, PlayerState> {
    render() {
        return (
            <div className="player">
                <video className="player__video" controls>
                    <source src="/media/sample_video.mp4" type="video/mp4" />
                    Your browser does not support HTML5 video.
                </video>
                <div className="player__info"></div>
                <div className="player__control_bar"></div>
            </div>
        );
    }
}

export default Player;
