import React, { useEffect, useState } from "react";
import "./Billboard.scss";
import BillboardSlideshow from "./BillboardSlideshow";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import Movie from "../../../cine_engine/ui_models/Movie";
import CineEnvironment from "../../../cine_engine/CineEnvironment";

const Billboard: React.FC = () => {

    const [slideshowMovies, setSlideshowMovies] = useState<Movie[]>([]);

    useEffect(() => {
        CineEnvironment.getCine().movieFinder.getSlideshowMovies().then(movies => {
            setSlideshowMovies(movies);
        });
    }, []);


    return (
        <div className="billboard">
            <Background />
            <BillboardSlideshow movies={slideshowMovies} />
            <BillboardGroup title="recently added" />
        </div>
    );
};

export default Billboard;
