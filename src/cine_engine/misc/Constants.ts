export default class Constants {
    public static readonly PAGES = {
        HOME: {
            id: "home",
            url: "/"
        },
        EXPLORE: {
            id: "explore",
            url: "/explore"
        },
        SEARCH: {
            id: "search",
            url: "/search"
        },
        WATCH: {
            id: "watch",
            url: "/watch"
        },
        MOVIE: {
            id: "movie",
            url: "/movie"
        },
        LOGOUT: {
            id: "logout",
            url: "/logout"
        },
    };

    private static readonly MOVIE_FINDER_API_URL = "http://localhost:1232/";

    public static readonly MOVIE_FINDER_API = {
        SLIDESHOW_URL: Constants.MOVIE_FINDER_API_URL + "slideshow",
        FEATURED_URL: Constants.MOVIE_FINDER_API_URL + "featured"
    };
}