import React, { useEffect, useState } from "react";
import "./Billboard.scss";
import BillboardSlideshow from "./BillboardSlideshow";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import Movie from "../../../cine_engine/ui_models/Movie";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";

const HomeBillboard: React.FC = () => {
    const [slideshowMovies, setSlideshowMovies] = useState<Movie[] | null>(null);
    const [homeMovieGroup, setHomeMovieGroup] = useState<MovieGroup>({ title: "", movies: [] });

    useEffect(() => {
        CineEnvironment.getCine().movieFinder.getSlideshowMovies().then(movies => {
            //setTimeout(() => setSlideshowMovies(movies), 1000);
        });

        CineEnvironment.getCine().movieFinder.getFeaturedMovies().then(movieGroup => {
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

export default HomeBillboard;
