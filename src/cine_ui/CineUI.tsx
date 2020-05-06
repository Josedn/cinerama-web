import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CineUI.scss";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
import Constants from "../cine_engine/misc/Constants";
import Header from "./components/header/Header";
import Redirector from "./components/generic/Redirector";

const EmptyComponent: React.FC = () => <></>;

const CineUI: React.FC = () => {

    return (
        <Router>
            <Switch>
                <Route path={Constants.PAGES.WATCH.url} component={EmptyComponent} />
                <Route component={Header} />
            </Switch>
            <Switch>
                <Route path={Constants.PAGES.WATCH.url} component={Watch} />
                <Route path={Constants.PAGES.SEARCH.url} component={Search} />
                <Route path={Constants.PAGES.EXPLORE.url} component={Movies} />
                <Route component={Home} />
            </Switch>
            <Redirector />
        </Router>
    );
}

export default CineUI;
