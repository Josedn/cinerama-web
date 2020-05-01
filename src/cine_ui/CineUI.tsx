import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CineUI.scss";
import Home from "./pages/Home/Home";
import Watch from "./pages/Watch/Watch";
import CineEnvironment from "../cine_engine/CineEnvironment";
import Search from "./pages/Search/Search";

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
                    <Route component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default CineUI;
