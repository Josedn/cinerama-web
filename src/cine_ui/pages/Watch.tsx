import React from "react";
import Player from "../components/player/Player";

type WatchProps = {};
type WatchState = {};

class Watch extends React.Component<WatchProps, WatchState> {
    render() {
        return <Player />;
    }
}

export default Watch;
