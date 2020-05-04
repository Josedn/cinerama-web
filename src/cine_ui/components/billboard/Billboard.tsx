import React, { useEffect, useState } from "react";
import "./Billboard.scss";
import BillboardSlideshow from "./BillboardSlideshow";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import Movie from "../../../cine_engine/ui_models/Movie";
import CineEnvironment from "../../../cine_engine/CineEnvironment";

const Billboard: React.FC = () => {
    const [slideshowMovies, setSlideshowMovies] = useState<Movie[]>([]);
    const { recentlyAdded } = CineEnvironment.getCine().cineUniversal.billboard;

    useEffect(() => {
        CineEnvironment.getCine().movieFinder.getSlideshowMovies().then(movies => {
            setSlideshowMovies(movies);
        });
    }, []);

    return (
        <div className="billboard">
            <Background />
            <BillboardSlideshow movies={slideshowMovies} />
            <BillboardGroup title={recentlyAdded} />
        </div>
    );
};

export default Billboard;
