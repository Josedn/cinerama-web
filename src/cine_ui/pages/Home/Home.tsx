import React from "react";
import Header from "../../components/header/Header";
import Billboard from "../../components/billboard/Billboard";
import CineEnvironment from "../../../cine_engine/CineEnvironment";
import Footer from "../../components/footer/Footer";

type HomeProps = {};
type HomeState = {};

class Home extends React.Component<HomeProps, HomeState> {
    componentDidMount() {
        CineEnvironment.getCine();
    }

    render() {
        return (
            <>
                <Header></Header>
                <Billboard></Billboard>
                <Footer></Footer>
            </>
        );
    }
}

export default Home;
