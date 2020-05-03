import React from "react";
import "./Billboard.scss";
import Group from "./Group";
import Background from "./Background";

const SearchBillBoard: React.FC = () => {
    return (
        <div className="billboard">
            <Background />
            <Group title="search results" />
        </div>
    );
};

export default SearchBillBoard;
