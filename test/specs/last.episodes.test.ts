import episodePage from "../pageobjects/episode.page.ts";
import EpisodePage from "../pageobjects/episode.page.ts";
import homePage from "../pageobjects/home.page.ts"
import page from "../pageobjects/page.ts";

describe('The last episodes list', () => {

    it('must contains 20 elements', async () => {

        await homePage.open();
        await browser.maximizeWindow();
        await browser.waitUntil(async () => ((await $('body')).isDisplayed()),
            {
                timeout: 3000, // Wait up to 3000 milliseconds or 3 seconds
                timeoutMsg: 'Expected URL to contain "sign_up" after 3 seconds'
            })

        const lastEpisodes = (await homePage.listLastEpisodes).$$('strong');
        const elements = await lastEpisodes.map(async (e) => await e.getText());

        await expect(elements.length).toBe(20);
    })

    it('matches the miniature info with the episode page info', async () => {

        await browser.pause(3000);
        const lastEpisodesNames = (await homePage.listLastEpisodes).$$('strong');
        const names = await lastEpisodesNames.map(async (e) => await e.getText());

        const lastEpisodesNumber = await (await homePage.listLastEpisodes).$$('span:nth-child(2)');
        const epNumber = await lastEpisodesNumber.map(async (e) => await e.getText());


        let lastEpisodesTitles: string[] = [];

        for (let i = 0; i < names.length; i++) {
            console.log("last episode #" + i)
            console.log(names[i] + ": " + epNumber[i]);
            (await homePage.listLastEpisodes).waitForDisplayed();
            const lastEpisodesLinks = await (await homePage.listLastEpisodes).$$('a')
            await homePage.clickLastEpisode(lastEpisodesLinks[i]);

            lastEpisodesTitles[i] = await (await EpisodePage.episodeTitle).getText();
            await expect(lastEpisodesTitles[i]).toContain(names[i]);
            await expect(lastEpisodesTitles[i]).toContain(epNumber[i]);
            //await browser.pause(2000)
            await homePage.clickHomePageLogoButton();
        }



    })
})
