import React from "react";
import "./Billboard.scss";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";

const MoviesBillboard: React.FC = () => {
    return (
        <div className="billboard">
            <Background />
            <BillboardGroup title="Popular" />
            <BillboardGroup title="Staff picks" />
            <BillboardGroup title="New" />
        </div>
    );
};

export default MoviesBillboard;
