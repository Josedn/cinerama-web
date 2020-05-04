import React from "react";
type MoviePreviewProps = {
    title: string;
    imgSrc: string;
};

const MoviePreview: React.FC<MoviePreviewProps> = (props: MoviePreviewProps) => {
    const { title, imgSrc } = props;
    return (
        <div className="movie">
            <img className="movie__preview" src={imgSrc} alt={title} />
            <div className="movie__info">
                <h4 className="movie__title">{title}</h4>
            </div>
        </div>
    );
};

export default MoviePreview;