import React from "react";
import "./Billboard.scss";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";

const SearchBillBoard: React.FC = () => {
    return (
        <div className="billboard">
            <Background />
            <BillboardGroup title="Search results" movies={[]} />
        </div>
    );
};

export default SearchBillBoard;
