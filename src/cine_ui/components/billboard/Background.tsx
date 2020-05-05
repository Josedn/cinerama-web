import React, { useEffect, useState } from "react";
import CineEnvironment from "../../../cine_engine/CineEnvironment";

const Background: React.FC = () => {
    const [background, setBackground] = useState(CineEnvironment.getCine().cineState.currentBackground);
    useEffect(() => {
        CineEnvironment.getCine().cineState.onChangeBackground = url => {
            setBackground(url);
        };

        return () => {
            CineEnvironment.getCine().cineState.onChangeBackground = () => { };
        };
    });

    let style = {};

    if (background.length > 0) {
        style = { backgroundImage: "url(" + background + ")" };
    }

    return (
        <>
            <div className="billboard__background" style={style}></div>
            <div className="billboard__blur"></div>
            <div className="billboard__gradient"></div>
        </>
    );
};

export default Background;
