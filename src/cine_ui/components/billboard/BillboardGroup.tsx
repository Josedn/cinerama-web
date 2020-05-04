import React from "react";
import MoviePreview from "./MoviePreview";
import Movie from "../../../cine_engine/ui_models/Movie";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";

type BillboardGroup = {
    title: string,
    movies: Movie[]
};

const BillboardGroup: React.FC<BillboardGroup> = (props: BillboardGroup) => {
    const { title, movies } = props;
    const moviePreviews = movies.map(movie => {
        return <MoviePreview key={movie._id} imgSrc={movie.images.banner} title={movie.title} />;
    });
    return (
        <div className="billboard__group">
            <h2 className="billboard__title">{title}</h2>
            <div className="group__grid">
                {moviePreviews}
            </div>
        </div>
    );
};

export default BillboardGroup;