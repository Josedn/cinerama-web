import React, { useEffect, useState } from "react";
import "./Billboard.scss";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";

const SearchBillBoard: React.FC = () => {

    const [movieGroup, setMovieGroup] = useState<MovieGroup>({ title: "", movies: [] });

    useEffect(() => {
        CineEnvironment.getCine().cineState.onUpdateSearchResults = result => {
            setMovieGroup(result);
        };
        return () => {
            CineEnvironment.getCine().cineState.onUpdateSearchResults = () => { };
        };
    }, []);

    return (
        <div className="billboard">
            <Background />
            <BillboardGroup movieGroup={movieGroup} />
        </div>
    );
};

export default SearchBillBoard;
