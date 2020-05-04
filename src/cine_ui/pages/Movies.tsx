import React from "react";
import MoviesBillboard from "../components/billboard/MoviesBillboard";
import Footer from "../components/footer/Footer";


const Movies: React.FC = () => {
    return (
        <>
            <MoviesBillboard></MoviesBillboard>
            <Footer></Footer>
        </>
    );
}

export default Movies;
