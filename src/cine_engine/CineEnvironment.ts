import Cine from "./Cine";

export default class CineEnvironment {
    static _cineInstance: Cine;
    static getCine(): Cine {
        if (this._cineInstance == null) {
            this._cineInstance = new Cine();
        }
        return this._cineInstance;
    }
}