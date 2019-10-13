import React from "react";
import './CineUI.css';
import Header from "./header/Header";

type CineUIProps = {};
type CineUIState = {};

class CineUI extends React.Component<CineUIProps, CineUIState> {
    render() {
        return (
            <Header></Header>
        );
    }
}

export default CineUI;