import Movie from "./Movie";

export default class MovieGroup {
    title: string;
    movies: Movie[];
    constructor(title: string, movies: Movie[]) {
        this.title = title;
        this.movies = movies;
    }
}