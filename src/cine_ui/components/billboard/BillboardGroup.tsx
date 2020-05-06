import React from "react";
import MovieBox from "./MovieBox";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";
import Constants from "../../../cine_engine/misc/Constants";

const BillboardGroup: React.FC<MovieGroup> = (props: MovieGroup) => {
    const { title, movies } = props;
    const MovieBoxs = movies.map(movie => {
        return <MovieBox key={movie._id} imgSrc={movie.images.banner} title={movie.title} link={Constants.PAGES.MOVIE.url + "/" + movie.slug} />;
    });
    return (
        <div className="billboard__group">
            <h2 className="billboard__title">{title}</h2>
            <div className="group__grid">
                {MovieBoxs}
            </div>
        </div>
    );
};

export default BillboardGroup;