import React from "react";
import Header from "../components/header/Header";
import Billboard from "../components/billboard/Billboard";
import Footer from "../components/footer/Footer";
type HomeProps = {};
type HomeState = {};

class Home extends React.Component<HomeProps, HomeState> {

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
