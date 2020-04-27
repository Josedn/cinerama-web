import React from "react";
import "./Billboard.scss";

const images = [
    "http://image.tmdb.org/t/p/w500/cSKXdkm38HIMsZZNYJDIOtfOV9B.jpg",
    "http://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    "http://image.tmdb.org/t/p/w500/l5lIlibDxnAK30aa28p0UtRldi.jpg",
    "http://image.tmdb.org/t/p/w500/vqzNJRH4YyquRiWxCCOH0aXggHI.jpg",
    "http://image.tmdb.org/t/p/w500/9AICdnpFIkZOx3OHz0fj3jwJHdK.jpg",
    "http://image.tmdb.org/t/p/w500/4AHkWCSau4OmMJTFo36bFMlCRtu.jpg"
];

const titles = [
    "Pulp fiction",
    "Parasite",
    "harry potter and the chamber of secrets",
    "scarface",
    "star wars: episode iv - a new hope"
];

const Movie = () => {
    const randomImg = images[Math.floor(images.length * Math.random())];
    const randomTitle = titles[Math.floor(titles.length * Math.random())];
    return (
        <div className="movie">
            <img className="movie__preview" src={randomImg} alt={randomTitle} />
            <div className="movie__info">
                <h4 className="movie__title">{randomTitle}</h4>
            </div>
        </div>
    );
};

const Group = () => {
    return (
        <div className="billboard__group">
            <h2 className="billboard__title">Popular</h2>
            <div className="group__list">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </div>
    );
};

const Slideshow = () => {
    const randomImg = images[Math.floor(images.length * Math.random())];
    const randomTitle = titles[Math.floor(titles.length * Math.random())];

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
                    <h3 className="slideshow__title">Pulp Fiction</h3>
                    <h4 className="slideshow__subtitle">1994</h4>
                    <p className="slideshow__description">
                        Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town.
                    </p>
                    <button className="slideshow__button">
                        <i className="fa fa-play slideshow__button-icon" aria-hidden="true"></i>
                        <span className="slideshow__button-text">Play</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

const Billboard: React.FC = () => {
    return (
        <div className="billboard">
            <div className="billboard__background"></div>
            <div className="billboard__blur"></div>
            <div className="billboard__gradient"></div>
            <Slideshow />
            <Group />
        </div>
    );
};

export default Billboard;
