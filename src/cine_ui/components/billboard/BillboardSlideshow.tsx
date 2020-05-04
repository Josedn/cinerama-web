import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../../../cine_engine/ui_models/Movie";

type SlideshowProps = {
    movies: Movie[]
};

const generateButtons = (total: number, activeIndex: number, onClick: (id: number) => void): React.ReactNode[] => {
    const buttons: React.ReactNode[] = [];
    for (let i = 0; i < total; i++) {
        const className = i === activeIndex ? "slideshow__progress-box slideshow__progress-box--active" : "slideshow__progress-box";
        buttons.push(<button key={i} onClick={() => onClick(i)} className={className}></button>);
    }
    return buttons;
};

const Slideshow: React.FC<SlideshowProps> = (props: SlideshowProps) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const { movies } = props;

    useEffect(() => {
        const moveNext = () => {
            console.log('moving next' + currentMovieIndex);
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
    }, [currentMovieIndex, movies.length]);

    if (movies.length === 0) {
        return <></>;
    }

    const currentMovie = movies[currentMovieIndex];
    const buttons = generateButtons(movies.length, currentMovieIndex, id => setCurrentMovieIndex(id));

    const preview = <div className="slideshow__preview">
        <img className="slideshow__image" src={currentMovie.images.banner} alt={currentMovie.title} />
        <div className="slideshow__progress">
            {buttons}
        </div>
    </div>;

    const content = <div className="slideshow__content">
        <h3 className="slideshow__title">{currentMovie.title}</h3>
        <h4 className="slideshow__subtitle">{currentMovie.year}</h4>
        <p className="slideshow__description">
            {currentMovie.synopsis}
        </p>
        <Link to={"/watch/" + currentMovie.slug}>
            <button className="slideshow__button">
                <i className="fa fa-play slideshow__button-icon" aria-hidden="true"></i>
                <span className="slideshow__button-text">Play</span>
            </button>
        </Link>
    </div>;

    return (
        <div className="billboard__slideshow">
            <h2 className="billboard__title">Popular on Filmstock</h2>
            <div className="slideshow">
                {preview}
                {content}
            </div>
        </div>
    );
};

export default Slideshow;