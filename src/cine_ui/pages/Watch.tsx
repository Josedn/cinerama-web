import React, { useState, useEffect } from "react";
import Player from "../components/player/Player";
import { pulp } from "../../cine_engine/movie_finder/MovieFinder";
import Movie from "../../cine_engine/ui_models/Movie";
import { useParams } from "react-router-dom";
import CineEnvironment from "../../cine_engine/CineEnvironment";
import MovieStream from "../../cine_engine/ui_models/MovieStream";
import Loading from "../components/loading/Loading";

const Watch: React.FC = () => {
    const [movieStream, setMovieStream] = useState<MovieStream>();
    const [teaser, setTeaser] = useState<string>("...");

    let { slug } = useParams();

    const onUpdate = (text: string) => {
        setTeaser(text);
    };

    const onError = (text: string) => {
        setTeaser(text);
    };

    const onReady = (stream: MovieStream) => {
        setMovieStream(stream);
    };

    useEffect(() => {
        if (slug != null) {
            const requestId = CineEnvironment.getCine().streamFinder.requestStream(slug, onUpdate, onError, onReady);
            return () => {
                CineEnvironment.getCine().streamFinder.cancelRequest(requestId);
            };
        }
    }, []);

    if (movieStream != null) {
        return <Player movie={movieStream.movie} src={movieStream.streamUrl} type={movieStream.type} />;
    } else {
        return <Loading teaser={teaser} />;
    }

}

export default Watch;
