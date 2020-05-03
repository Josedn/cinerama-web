import React from "react";
import NProgress from 'nprogress';
import Header from "../../components/header/Header";
import SearchBillboard from "../../components/billboard/SearchBillboard";
import Footer from "../../components/footer/Footer";

type SearchProps = {};
type SearchState = {};

class Search extends React.Component<SearchProps, SearchState> {

    componentDidMount() {
        NProgress.start();
        setTimeout(() => {
            NProgress.done();
        }, 500);
    }

    render() {
        return (
            <>
                <Header></Header>
                <SearchBillboard></SearchBillboard>
                <Footer></Footer>
            </>
        );
    }
}

export default Search;
