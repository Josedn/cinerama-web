import React from "react";
import Header from "../../components/header/Header";
import Billboard from "../../components/billboard/Billboard";
import Footer from "../../components/footer/Footer";

type SearchProps = {};
type SearchState = {};

class Search extends React.Component<SearchProps, SearchState> {
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

export default Search;
