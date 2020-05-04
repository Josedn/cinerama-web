import React from "react";
import "./Billboard.scss";
import BillboardSlideshow from "./BillboardSlideshow";
import BillboardGroup from "./BillboardGroup";
import Background from "./Background";

const Billboard: React.FC = () => {
    return (
        <div className="billboard">
            <Background />
            <BillboardSlideshow movies={[]} />
            <BillboardGroup title="recently added" />
        </div>
    );
};

export default Billboard;
