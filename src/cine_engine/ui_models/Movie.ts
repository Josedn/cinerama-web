export default class Movie {
    _id: string;
    imdb_id: string;
    title: string;
    year: string;
    synopsis: string;
    runtime: number;
    trailer: string;
    images: {
        banner: string;
        fanart: string;
        poster: string;
    }

    constructor(id: string, imdbId: string, title: string, year: string, synopsis: string, runtime: number, trailer: string, banner: string, fanart: string, poster: string) {
        this._id = id;
        this.imdb_id = imdbId;
        this.title = title;
        this.year = year;
        this.synopsis = synopsis;
        this.runtime = runtime;
        this.trailer = trailer;
        this.images = {
            banner,
            fanart,
            poster
        };
    }
}