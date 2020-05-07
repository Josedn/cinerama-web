import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import PreviewBillboard from "../components/billboard/PreviewBillboard";
import { useParams } from "react-router-dom";
import CineEnvironment from "../../cine_engine/CineEnvironment";
import Movie from "../../cine_engine/ui_models/Movie";


const MovieDetails: React.FC = () => {
    const [movie, setMovie] = useState<Movie>();
    let { slug } = useParams();

    useEffect(() => {

        if (slug != null) {
            CineEnvironment.getCine().movieFinder.searchBySlug(slug).then(result => {
                if (result != null) {
                    setMovie(result);
                } else {
                    //TODO: Handle not found
                }
            });
        }

    }, [slug]);

    if (movie != null) {
        return (
            <>
                <PreviewBillboard movie={movie} />
                <Footer></Footer>
            </>
        );
    } else {
        return (
            <Footer></Footer>
        );
    }

}

export default MovieDetails;
