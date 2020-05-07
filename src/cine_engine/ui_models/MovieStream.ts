import Movie from "./Movie";

export default class MovieStream {
    movie: Movie;
    streamUrl: string;
    type: string;

    constructor(movie: Movie, streamUrl: string, type: string) {
        this.movie = movie;
        this.streamUrl = streamUrl;
        this.type = type;
    }
}