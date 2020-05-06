import React from "react";
import Player from "../components/player/Player";
import { pulp } from "../../cine_engine/movie_finder/MovieFinder";

const Watch: React.FC = () => {
    return <Player movie={pulp} src="http://filmstock.tv/Pulp Fiction (1994) [1080p]/Pulp.Fiction.1994.1080p.BrRip.x264.YIFY.mp4" type="video/mp4" />;
}

export default Watch;
