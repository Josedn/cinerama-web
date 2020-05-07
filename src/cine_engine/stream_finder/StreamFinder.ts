import NProgress from 'nprogress';
import MovieStream from '../ui_models/MovieStream';
import { pulp } from '../movie_finder/MovieFinder';

export default class StreamFinder {

    requestStream(slug: string, onUpdate: (text: string) => void, onError: (text: string) => void, onReady: (movieStream: MovieStream) => void) {
        NProgress.start();

        console.log('started');

        return setTimeout(() => {
            onUpdate("Requesting movie...");
            NProgress.inc();
            setTimeout(() => {
                onUpdate("Initializing stream...");
                NProgress.inc();
                setTimeout(() => {
                    onReady(new MovieStream(pulp, "https://filmstock.tv/Pulp Fiction (1994) [1080p]/Pulp.Fiction.1994.1080p.BrRip.x264.YIFY.mp4", "video/mp4"));
                    NProgress.done();
                }, 2000);
            }, 2000);
        }, 2000);
    }

    cancelRequest(id: any) {
        clearTimeout(id);
    }
}