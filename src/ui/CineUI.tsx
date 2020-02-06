import React from "react";
import './CineUI.scss';
import Header from "./header/Header";
import Billboard from "./billboard/Billboard";

type CineUIProps = {};
type CineUIState = {};

class CineUI extends React.Component<CineUIProps, CineUIState> {
    render() {
        return (
            <>
                <Header></Header>
                <Billboard></Billboard>
            </>
        );
    }
}

export default CineUI;
