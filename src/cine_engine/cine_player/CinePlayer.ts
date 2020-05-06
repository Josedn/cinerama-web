export default class CinePlayer {
    container: HTMLVideoElement;

    getBufferedTime() {
        let max = 0;
        if (this.container != null) {
            for (let i = 0; i < this.container.buffered.length; i++) {
                const current = this.container.buffered.end(i);
                max = Math.max(max, current);
            }
        }
        return max;
    }

    constructor(container: HTMLVideoElement, onPause: () => void, onPlay: () => void, onTimeUpdate: (currentTime: number, durationTime: number, bufferedTime: number) => void) {
        this.container = container;

        container.onpause = onPause;
        container.onplay = onPlay;
        container.ontimeupdate = () => {
            onTimeUpdate(container.currentTime, container.duration, this.getBufferedTime());
        };

        console.log('cineplayer created');
    }

    doPlayPause() {
        if (this.container != null) {
            if (this.container.paused) {
                this.container.play();
            } else {
                this.container.pause();
            }
        }
    }

    doSetTime(peekPosition: number) {
        if (this.container != null && peekPosition >= 0 && peekPosition < this.container.duration) {
            this.container.currentTime = peekPosition;
        }
    }

    dispose() {
        if (this.container != null) {
            this.container.onpause = null;
            this.container.onplay = null;
            this.container.ontimeupdate = null;
        }
        console.log('player disposed');
    }


}