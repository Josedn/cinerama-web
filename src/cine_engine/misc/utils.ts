const pad = (num: any, size: number) => {
    return ('000' + num).slice(size * -1);
};

export const secondsToTime = (timeInSeconds: number): string => {
    const hours = Math.floor(timeInSeconds / 60 / 60);
    const minutes = Math.floor(timeInSeconds / 60) % 60;
    const seconds = Math.floor(timeInSeconds - minutes * 60);
    if (hours > 0) {
        return pad(hours, 2) + ':' + pad(minutes, 2) + ':' + pad(seconds, 2);
    }
    return pad(minutes, 2) + ':' + pad(seconds, 2);
};