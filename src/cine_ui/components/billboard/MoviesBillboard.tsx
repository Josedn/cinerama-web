import React from "react";
import "./Billboard.scss";
import Group from "./Group";
import Background from "./Background";

const MoviesBillboard: React.FC = () => {
    return (
        <div className="billboard">
            <Background />
            <Group title="Popular" />
            <Group title="Staff picks" />
            <Group title="New" />
        </div>
    );
};

export default MoviesBillboard;
