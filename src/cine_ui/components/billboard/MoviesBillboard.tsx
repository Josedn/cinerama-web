import React, { useEffect, useState, ReactNode } from "react";
import "./Billboard.scss";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";

const MoviesBillboard: React.FC = () => {

    const [movieGroups, setMovieGroups] = useState<MovieGroup[] | null>(null);

    useEffect(() => {
        CineEnvironment.getCine().movieFinder.getExploreMovieGroups().then(groups => {
            setMovieGroups(groups);
        });

    }, []);
    let showGroups: ReactNode[] = [];

    if (movieGroups != null) {
        showGroups = movieGroups.map(group => {
            return <BillboardGroup key={group.title} movieGroup={group} />; //TODO: check key
        });
    } else {
        for (let i = 0; i < 3; i++) {
            showGroups.push(<BillboardGroup key={i} movieGroup={null} />);
        }
    }

    return (
        <div className="billboard">
            <Background />
            {showGroups}
        </div>
    );
};

export default MoviesBillboard;
