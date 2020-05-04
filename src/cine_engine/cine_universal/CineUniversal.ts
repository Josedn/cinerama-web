export default class CineUniversal {
    header: HeaderTexts;
    footer: FooterTexts;
    billboard: BillboardTexts;

    constructor() {
        this.header = {
            home: "Home",
            movies: "Movies",
            search: "Search",
            logout: "Logout"
        };

        this.footer = {
            copyrightInfo: "Filmstock.tv © 2020 - All rights reserved to their respective owners",
            dmca: "DMCA",
            terms: "Terms",
            contact: "Contact",
        };

        this.billboard = {
            recentlyAdded: "Recently added",
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
    movies: string;
    search: string;
    logout: string;
};

export type FooterTexts = {
    copyrightInfo: string;
    dmca: string;
    terms: string;
    contact: string;
};

export type BillboardTexts = {
    recentlyAdded: string;
};