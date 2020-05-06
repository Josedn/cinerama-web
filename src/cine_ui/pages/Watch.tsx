import React from "react";
import Player from "../components/player/Player";
import { pulp } from "../../cine_engine/movie_finder/MovieFinder";

const Watch: React.FC = () => {
    return <Player movie={pulp} src="http://filmstock.tv/Labyrinth.1986.720p.BluRay.x264.YIFY.mp4" type="video/mp4" />;
}

export default Watch;
