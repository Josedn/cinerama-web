import MovieFinder from "./movie_finder/MovieFinder";
import CinePlayer from "./cine_player/CinePlayer";
import CineUniversal from "./cine_universal/CineUniversal";
import CineState from "./cine_state/CineState";

export default class Cine {
    movieFinder: MovieFinder;
    cinePlayer?: CinePlayer;
    cineUniversal: CineUniversal;
    cineState: CineState;

    constructor() {
        this.movieFinder = new MovieFinder();
        this.cineUniversal = new CineUniversal();
        this.cineState = new CineState();
        this.cinePlayer = undefined;
        console.log('engine created');
    }

    initialize() {
        this.cineUniversal.loadLanguage('en');
    }
}