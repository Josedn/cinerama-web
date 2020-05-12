import Constants from "../misc/Constants";
import MovieGroup from "../ui_models/MovieGroup";
import CineEnvironment from "../CineEnvironment";

export default class CineState {
    currentBackground: string;
    private currentSearch: string;

    onStartSearch: () => void;
    onChangeBackground: (imgSrc: string) => void;
    onRedirect: (location?: string) => void;
    onUpdateSearchResults: (searchResult: MovieGroup) => void;

    constructor() {
        this.currentBackground = "";
        this.currentSearch = "";
        this.onStartSearch = () => { };
        this.onChangeBackground = () => { };
        this.onRedirect = () => { };
        this.onUpdateSearchResults = () => { };
    }

    handleStartSearch() {
        this.onStartSearch();
    }

    handleChangeBackground(imgSrc: string) {
        this.currentBackground = imgSrc;
        this.onChangeBackground(imgSrc);
    }

    handleRedirect(location: string) {
        this.onRedirect(location);
    }

    handleRedirected() {
        this.onRedirect(undefined);
    }

    handleSearch(searchText: string) {
        this.currentSearch = searchText;
        if (searchText.length > 0) {
            this.handleRedirect(Constants.PAGES.SEARCH.url + "?q=" + encodeURI(this.currentSearch));
            CineEnvironment.getCine().movieFinder.getSearchMovies(this.currentSearch).then(group => {
                this.onUpdateSearchResults(group);
            });
        }
    }
}