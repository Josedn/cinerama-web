import React from "react";
import Header from "../components/header/Header";
import MoviesBillboard from "../components/billboard/MoviesBillboard";
import Footer from "../components/footer/Footer";

type MoviesProps = {};
type MoviesState = {};

class Movies extends React.Component<MoviesProps, MoviesState> {
    render() {
        return (
            <>
                <Header></Header>
                <MoviesBillboard></MoviesBillboard>
                <Footer></Footer>
            </>
        );
    }
}

export default Movies;
