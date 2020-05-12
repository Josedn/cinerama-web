import React from "react";
import MovieBox, { MovieBoxSkeleton } from "./MovieBox";
import MovieGroup from "../../../cine_engine/ui_models/MovieGroup";
import Constants from "../../../cine_engine/misc/Constants";

type BillboardGroupProps = {
    movieGroup: MovieGroup | null,
};

const BillboardGroup: React.FC<BillboardGroupProps> = (props: BillboardGroupProps) => {
    const { movieGroup } = props;

    if (movieGroup == null) {
        return (
            <div className="billboard__group">
                <h2 className="billboard__title billboard__title--skeleton">&nbsp;</h2>
                <div className="group__grid">
                    <MovieBoxSkeleton />
                    <MovieBoxSkeleton />
                    <MovieBoxSkeleton />
                    <MovieBoxSkeleton />
                </div>
            </div>
        );
    }
    const { title, movies } = movieGroup;
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