import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../../../cine_engine/ui_models/Movie";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import Constants from "../../../cine_engine/misc/Constants";
import "./Slideshow.scss";

type SlideshowProps = {
    movies: Movie[] | null
};

const generateButtons = (total: number, activeIndex: number, onClick: (id: number) => void): React.ReactNode[] => {
    const buttons: React.ReactNode[] = [];
    for (let i = 0; i < total; i++) {
        const className = i === activeIndex ? "slideshow__progress-box slideshow__progress-box--active" : "slideshow__progress-box";
        buttons.push(<button key={i} onMouseEnter={() => onClick(i)} onClick={() => onClick(i)} className={className}></button>);
    }
    return buttons;
};

const Slideshow: React.FC<SlideshowProps> = (props: SlideshowProps) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const { movies } = props;
    const { slideshowTitle, play } = CineEnvironment.getCine().cineUniversal.home;

    useEffect(() => {
        if (movies != null) {
            const moveNext = () => {
                if (movies.length > 1 && currentMovieIndex < movies.length - 1) {
                    setCurrentMovieIndex(currentMovieIndex + 1);
                } else {
                    setCurrentMovieIndex(0);
                }
            };

            const intervalId = setInterval(moveNext, 7000);
            //TODO: add transition
            return () => {
                clearInterval(intervalId);
            };
        }
    }, [currentMovieIndex, movies]);

    if (movies == null) {
        return (
            <div className="billboard__slideshow">
                <h2 className="billboard__title billboard__title--skeleton">&nbsp;</h2>
                <div className="slideshow">
                    <div className="slideshow__preview">
                        <div className="slideshow__image-container">
                        </div>
                        <div className="slideshow__progress">
                        </div>
                    </div>
                    <div className="slideshow__content">
                        <h3 className="slideshow__title slideshow__title--skeleton">&nbsp;</h3>
                        <h4 className="slideshow__subtitle slideshow__subtitle--skeleton">&nbsp;</h4>
                        <p className="slideshow__description slideshow__description--skeleton">
                            &nbsp;
                        </p>
                        <button className="slideshow__button slideshow__button--skeleton">
                            <i className="fa fa-play slideshow__button-icon" aria-hidden="true"></i>
                            <span className="slideshow__button-text">&nbsp;</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    if (movies.length === 0) {
        return <></>;
    }

    const currentMovie = movies[currentMovieIndex];
    const buttons = generateButtons(movies.length, currentMovieIndex, id => setCurrentMovieIndex(id));

    CineEnvironment.getCine().cineState.handleChangeBackground(currentMovie.images.fanart);

    const preview =
        <div className="slideshow__preview">
            <div className="slideshow__image-container">
                <img className="slideshow__image" src={currentMovie.images.banner} alt={currentMovie.title} />
            </div>
            <div className="slideshow__progress">
                {buttons}
            </div>
        </div>;

    const content =
        <div className="slideshow__content">
            <h3 className="slideshow__title">{currentMovie.title}</h3>
            <h4 className="slideshow__subtitle">{currentMovie.year}</h4>
            <p className="slideshow__description">
                {currentMovie.synopsis}
            </p>
            <Link to={Constants.PAGES.WATCH.url + "/" + currentMovie.slug}>
                <button className="slideshow__button">
                    <i className="fa fa-play slideshow__button-icon" aria-hidden="true"></i>
                    <span className="slideshow__button-text">{play}</span>
                </button>
            </Link>
        </div>;

    return (
        <div className="billboard__slideshow">
            <h2 className="billboard__title">{slideshowTitle}</h2>
            <div className="slideshow">
                {preview}
                {content}
            </div>
        </div>
    );
};

export default Slideshow;