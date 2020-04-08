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

const Movie = () => {
    const randomImg = images[Math.floor(images.length * Math.random())];
    return (
        <div className="movie">
            <img className="movie__preview" src={randomImg} alt="My sample" />
            <div className="movie__info">
                <h4 className="movie__title">The Walking Dead</h4>
                <h5 className="movie__year">2007</h5>
            </div>
        </div>
    );
};

const Group = () => {
    return (
        <div className="billboard__group">
            <h2 className="group__title">Trending Now</h2>
            <div className="group__list">
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
                <Movie />
            </div>
        </div>
    );
};

const Billboard: React.FC = () => {
    return (
        <div className="billboard">
            <Group />
            <Group />
        </div>
    );
};

export default Billboard;
