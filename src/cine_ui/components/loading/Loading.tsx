import React from "react";
import "./Loading.scss";
import NProgress from 'nprogress';

const Loading: React.FC = () => {

    NProgress.start();

    setTimeout(() => {
        NProgress.set(0.7);
    }, 2000);

    return (
        <div className="loading">
            <img className="loading__logo" src="/images/filmstock_white.svg" alt="Filmstock" />
            <h2 className="loading__teaser">Loading...</h2>
            <footer className="loading__footer">filmstock &copy; 2020</footer>
        </div>
    );
};

export default Loading;