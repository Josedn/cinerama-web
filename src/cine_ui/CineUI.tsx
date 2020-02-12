import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CineUI.scss";
import Home from "./pages/Home/Home";

class CineUI extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default CineUI;
