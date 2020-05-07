import React from "react";
import { Link } from "react-router-dom";
import "./Billboard.scss";
import Movie from "../../../cine_engine/ui_models/Movie";
import Background from "./Background";
import Constants from "../../../cine_engine/misc/Constants";
import CineEnvironment from "../../../cine_engine/CineEnvironment";

type PreviewBillboardProps = {
    movie: Movie
};

const PreviewBillboard: React.FC<PreviewBillboardProps> = (props: PreviewBillboardProps) => {
    const { movie } = props;

    const { play } = CineEnvironment.getCine().cineUniversal.home;

    CineEnvironment.getCine().cineState.handleChangeBackground(movie.images.fanart);

    const preview =
        <div className="slideshow__preview">
            <img className="slideshow__image" src={movie.images.banner} alt={movie.title} />
            <div className="slideshow__progress">

            </div>
        </div>;

    const content =
        <div className="slideshow__content">
            <h3 className="slideshow__title">{movie.title}</h3>
            <h4 className="slideshow__subtitle">{movie.year}</h4>
            <p className="slideshow__description">
                {movie.synopsis}
            </p>
            <Link to={Constants.PAGES.WATCH.url + "/" + movie.slug}>
                <button className="slideshow__button">
                    <i className="fa fa-play slideshow__button-icon" aria-hidden="true"></i>
                    <span className="slideshow__button-text">{play}</span>
                </button>
            </Link>
        </div>;

    return (
        <div className="billboard">
            <Background />
            <div className="billboard__slideshow">
                <div className="slideshow">
                    {preview}
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PreviewBillboard;