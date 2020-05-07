export default class CineUniversal {
    header: HeaderTexts;
    footer: FooterTexts;
    search: SearchTexts;
    player: PlayerTexts;
    home: HomeTexts;

    constructor() {
        this.header = {
            home: "Home",
            explore: "Movies",
            search: "Search",
            logout: "Log in"
        };

        this.footer = {
            copyrightInfo: "Filmstock.tv © 2020 - All rights reserved to their respective owners.",
            dmca: "DMCA",
            terms: "Terms",
            contact: "Contact",
        };

        this.search = {
            placeholder: "Movies, people, genres...",
        };

        this.player = {
            unsupportedHtmlVideo: "Your browser does not support HTML5 video.",
            loading: "Loading...",
        };

        this.home = {
            slideshowTitle: "Trending",
            play: "Play",
        };
    }

    loadLanguage(language: string): Promise<void> {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(), 500);
        });
    }
}

export type HeaderTexts = {
    home: string;
    explore: string;
    search: string;
    logout: string;
};

export type FooterTexts = {
    copyrightInfo: string;
    dmca: string;
    terms: string;
    contact: string;
};

export type SearchTexts = {
    placeholder: string;
};

export type PlayerTexts = {
    unsupportedHtmlVideo: string;
    loading: string;
};

export type HomeTexts = {
    slideshowTitle: string;
    play: string;
};