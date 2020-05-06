import React from "react";
import Footer from "../components/footer/Footer";
import { godfather2 } from "../../cine_engine/movie_finder/MovieFinder";
import PreviewBillboard from "../components/billboard/PreviewBillboard";


const MovieDetails: React.FC = () => {
 

    return (
        <>
            <PreviewBillboard movie={godfather2} />
            <Footer></Footer>
        </>
    );
}

export default MovieDetails;
