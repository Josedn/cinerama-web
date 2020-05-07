import React from "react";
import "./Loading.scss";
import NProgress from 'nprogress';
import CineEnvironment from "../../../cine_engine/CineEnvironment";

export type LoadingProps = {
    teaser: string;
};

const Loading: React.FC<LoadingProps> = (props) => {
    const { teaser } = props;
    NProgress.start();

    setTimeout(() => {
        NProgress.set(0.7);
    }, 2000);

    const { copyrightInfo } = CineEnvironment.getCine().cineUniversal.footer;

    return (
        <div className="loading">
            <img className="loading__logo" src="/images/filmstock_white.svg" alt="Filmstock" />
            <h2 className="loading__teaser">{teaser}</h2>
            <footer className="loading__footer">{copyrightInfo}</footer>
        </div>
    );
};

export default Loading;