import React from "react";
import { Link } from "react-router-dom";
import "./Billboard.scss";
import Movie from "../../../cine_engine/ui_models/Movie";
import Background from "./Background";

type PreviewBillboardProps = {
    movie: Movie
};

const PreviewBillboard: React.FC<PreviewBillboardProps> = (props: PreviewBillboardProps) => {
    const { movie } = props;
    return (
        <div className="billboard">
            <Background />
            <div className="billboard__slideshow">
                <h2 className="billboard__title">Movie</h2>
                <div className="slideshow">
                    {movie.title}
                </div>
            </div>
        </div>
    );
};

export default PreviewBillboard;