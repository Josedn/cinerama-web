import React, { useEffect, useState } from "react";
import "./Billboard.scss";
import BillboardSlideshow from "./BillboardSlideshow";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import Movie from "../../../cine_engine/ui_models/Movie";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";

const Billboard: React.FC = () => {
    const [slideshowMovies, setSlideshowMovies] = useState<Movie[]>([]);
    const [homeMovieGroup, setHomeMovieGroup] = useState<MovieGroup>({ title: "", movies: [] });

    useEffect(() => {
        CineEnvironment.getCine().movieFinder.getSlideshowMovies().then(movies => {
            setSlideshowMovies(movies);
        });

        CineEnvironment.getCine().movieFinder.getHomeMovieGroup().then(movieGroup => {
            setHomeMovieGroup(movieGroup);
        });

    }, []);

    return (
        <div className="billboard">
            <Background />
            <BillboardSlideshow movies={slideshowMovies} />
            <BillboardGroup title={homeMovieGroup.title} movies={homeMovieGroup.movies} />
        </div>
    );
};

export default Billboard;
