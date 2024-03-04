import Page from "./page.ts";

class EpisodePage extends Page {

    get episodeTitle() { return $('h1.Title'); }



    constructor() {
        super()

    }

    async open() {
        return await super.open('')
    }






}

export default new EpisodePage();