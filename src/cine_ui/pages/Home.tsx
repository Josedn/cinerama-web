import React from "react";
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Footer from "../components/footer/Footer";
import CineEnvironment from "../../cine_engine/CineEnvironment";

type HomeProps = {};
type HomeState = {};

class Home extends React.Component<HomeProps, HomeState> {

    componentDidMount() {
        //CineEnvironment.getCine().movieFinder.get
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
