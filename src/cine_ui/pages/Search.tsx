import React, { useEffect } from "react";
import SearchBillboard from "../components/billboard/SearchBillboard";
import Footer from "../components/footer/Footer";
import qs from "qs";
import { useLocation } from "react-router-dom";
import CineEnvironment from "../../cine_engine/CineEnvironment";
import Constants from "../../cine_engine/misc/Constants";

const Search: React.FC = () => {
    const location = useLocation();
    const parsed = qs.parse(location.search, { ignoreQueryPrefix: true });

    useEffect(() => {
        if (parsed.q != null && parsed.q.length > 0) {
            CineEnvironment.getCine().cineState.handleSearch(parsed.q.toString(), true);
        } else {
            CineEnvironment.getCine().cineState.handleRedirect(Constants.PAGES.HOME.url);
        }
    });
    return (
        <>
            <SearchBillboard></SearchBillboard>
            <Footer></Footer>
        </>
    );
}

export default Search;
