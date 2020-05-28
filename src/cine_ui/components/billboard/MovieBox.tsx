import React from "react";
import { Link } from "react-router-dom";
type MovieBoxProps = {
    title: string;
    imgSrc?: string;
    link: string;
};

const MovieBox: React.FC<MovieBoxProps> = (props: MovieBoxProps) => {
    const { title, imgSrc, link } = props;
    const image = imgSrc != null ? <img className="movie__preview" src={imgSrc} alt={title} /> : <></>;
    return (
        <Link className="movie" to={link}>
            <div className="movie__preview-container">
                {image}
            </div>
            <div className="movie__info">
                <h4 className="movie__title">{title}</h4>
            </div>
        </Link>
    );
};

export const MovieBoxSkeleton: React.FC = () => {
    return (
        <div className="movie">
            <div className="movie__preview-container">
            </div>
            <div className="movie__info">
                <h4 className="movie__title movie__title--skeleton">&nbsp;</h4>
            </div>
        </div>
    );
};

export default MovieBox;