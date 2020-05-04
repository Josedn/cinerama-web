import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CineUI.scss";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import CineEnvironment from "../cine_engine/CineEnvironment";
import Search from "./pages/Search";
import Movies from "./pages/Movies";

class CineUI extends React.Component {
    componentDidMount() {
        CineEnvironment.getCine();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/watch" component={Watch} />
                    <Route path="/search" component={Search} />
                    <Route path="/movies" component={Movies} />
                    <Route component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default CineUI;
