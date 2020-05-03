import React from "react";
import { Link } from "react-router-dom";

const Slideshow = () => {
    const randomImg = "https://img.yts.mx/assets/images/movies/Pulp_Fiction_1994/medium-cover.jpg";
    const randomTitle = "Pulp Fiction";

    return (
        <div className="billboard__slideshow">
            <h2 className="billboard__title">Popular on Filmstock</h2>
            <div className="slideshow">
                <div className="slideshow__preview">
                    <img className="slideshow__image" src={randomImg} alt={randomTitle} />
                    <div className="slideshow__progress">
                        <button className="slideshow__progress-box slideshow__progress-box--active"></button>
                        <button className="slideshow__progress-box"></button>
                        <button className="slideshow__progress-box"></button>
                    </div>
                </div>
                <div className="slideshow__content">
                    <h3 className="slideshow__title">{randomTitle}</h3>
                    <h4 className="slideshow__subtitle">1994</h4>
                    <p className="slideshow__description">
                        Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town.
                    </p>
                    <Link to="/watch">
                        <button className="slideshow__button">
                            <i className="fa fa-play slideshow__button-icon" aria-hidden="true"></i>
                            <span className="slideshow__button-text">Play</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Slideshow;