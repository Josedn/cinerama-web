import React from "react";

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

const MoviePreview = () => {
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

export default MoviePreview;