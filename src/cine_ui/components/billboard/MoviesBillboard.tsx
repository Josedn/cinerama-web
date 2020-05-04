import React, { useEffect, useState } from "react";
import "./Billboard.scss";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";

const MoviesBillboard: React.FC = () => {

    const [movieGroups, setMovieGroups] = useState<MovieGroup[]>([]);

    useEffect(() => {
        CineEnvironment.getCine().movieFinder.getExploreMovieGroups().then(groups => {
            setMovieGroups(groups);
        });

    }, []);

    const showGroups = movieGroups.map(group => {
        return <BillboardGroup key={group.title} title={group.title} movies={group.movies} />; //TODO: check key
    });

    return (
        <div className="billboard">
            <Background />
            {showGroups}
        </div>
    );
};

export default MoviesBillboard;
