import NProgress from 'nprogress';
import Movie from "../ui_models/Movie";

export default class MovieFinder {
    getSlideshowMovies(): Promise<Movie[]> {
        return new Promise((resolve, reject) => {
            const pulp: Movie = {
                "_id": "tt0110912",
                "imdb_id": "tt0110912",
                "title": "Pulp Fiction",
                "year": "1994",
                "slug": "pulp-fiction-1994",
                "synopsis": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
                "runtime": 154,
                "trailer": "http://youtube.com/watch?v=tGpTpVyI_OQ",
                "images": {
                    "banner": "http://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
                    "fanart": "http://image.tmdb.org/t/p/w500/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
                    "poster": "http://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg"
                }
            };

            NProgress.start();

            setTimeout(() => {
                NProgress.done();
                resolve([pulp]);
            }, 1000);
        });
    }

}