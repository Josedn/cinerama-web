import React from "react";
import MoviePreview from "./MoviePreview";

type BillboardGroup = {
    title: string,
};

const BillboardGroup: React.FC<BillboardGroup> = (props: BillboardGroup) => {
    const { title } = props;
    return (
        <div className="billboard__group">
            <h2 className="billboard__title">{title}</h2>
            <div className="group__grid">
                <MoviePreview />
                <MoviePreview />
                <MoviePreview />
                <MoviePreview />
                <MoviePreview />
                <MoviePreview />
                <MoviePreview />
                <MoviePreview />
            </div>
        </div>
    );
};

export default BillboardGroup;