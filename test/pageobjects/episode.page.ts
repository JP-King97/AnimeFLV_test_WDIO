import homePage from "./home.page.ts";
import Page from "./page.ts";

class EpisodePage extends Page {

    get episodeTitle() { return $('h1.Title'); }



    constructor() {
        super()

    }

    async open() {
        return await super.open('')
    }

    public async clickHomePageLogoButton() {
        homePage.homeButtonLogo.waitForClickable();
        await this.performClick(homePage.homeButtonLogo)
    }





}

export default new EpisodePage();