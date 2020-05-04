import MovieFinder from "./movie_finder/MovieFinder";
import CinePlayer from "./cine_player/CinePlayer";
import CineUniversal from "./cine_universal/CineUniversal";

export default class Cine {
    movieFinder: MovieFinder;
    cinePlayer: CinePlayer;
    cineUniversal: CineUniversal;

    constructor() {
        this.movieFinder = new MovieFinder();
        this.cinePlayer = new CinePlayer();
        this.cineUniversal = new CineUniversal();
    }
}