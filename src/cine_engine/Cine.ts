import MovieFinder from "./movie_finder/MovieFinder";
import CineUniversal from "./cine_universal/CineUniversal";
import CineState from "./cine_state/CineState";
import StreamFinder from "./stream_finder/StreamFinder";

export default class Cine {
    movieFinder: MovieFinder;
    cineUniversal: CineUniversal;
    cineState: CineState;
    streamFinder: StreamFinder;

    constructor() {
        this.movieFinder = new MovieFinder();
        this.cineUniversal = new CineUniversal();
        this.cineState = new CineState();
        this.streamFinder = new StreamFinder();
        console.log('engine created');
    }

    initialize() {
        this.cineUniversal.loadLanguage('en');
    }
}