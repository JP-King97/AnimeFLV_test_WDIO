import Page from './page.ts'
import allureReporter from '@wdio/allure-reporter'
import { ChainablePromiseElement } from 'webdriverio'



class HomePage extends Page {

    get loginButton() { return $('span.fa-user'); }
    get submitButton() { return $('button[type="submit"]'); }
    get emailBox() { return $('input[name="email"]'); }
    get password() { return $('input[name="password"]') }
    get welcomeLabel() { return $('span.fa-chevron-down > span') }
    get registrationLink() { return $('a[href="/auth/sign_up"]') }
    get listLastEpisodes() { return $('ul.ListEpisodios') }
    get homeButtonLogo() { return $('div.Logo img') }



    /**
     * Method to open the url path in the browser
     * @param path is the complement text to the main url path of the page
     * @returns 
     */
    public async open() {
        return await super.open('');
    }

    /**
     * 
     * @returns the text that should appears in the login div in the home page
     *          after a successfully login process. 
     */
    public async getWelcomeText(): Promise<string> {
        allureReporter.startStep("get 'Welcome' Text")
        const text = (await this.welcomeLabel).getText();
        console.log(text);
        allureReporter.endStep()
        return text;
    }

    /**
     * Method to press the button that display the login div
     */
    public async pressLoginButton() {
        this.performClick(this.loginButton);
    }

    /**
     * Method to press the submit button in the login div 
     */
    public async pressSubmitButton() {
        this.performClick(await this.submitButton);
    }

    /**
     * Method to press the registration link in the login div
     */
    public async pressRegistrationLink() {
        this.performClick(await this.registrationLink)
    }

    /**
     * Method to type the email in the email box
     * @param email credential needed to login
     */
    public async typeEmail(email: string) {
        this.typeText(await this.emailBox, email);
    }

    /**
     * Method to type the password in the password box
     * @param password credential needed to login
     */
    public async typePassword(password: string) {
        this.typeText(await (this.password), password);
    }

    /** public async getAnimeNames(element: WebdriverIO.Element): Promise<string> {
         const name = await element.getText();
         return name;s
     }*/

    // public async getAllLastAnimesNames() {
    //     // 1. Get all elements matching the selector ul.ListEpisodios>li>a
    //     await browser.pause(3000);
    //     const lastEpisodes = await this.listLastEpisodesName;
    //     const names = await lastEpisodes.map(async (e) => await e.getText())
    //     names.forEach((e) => {
    //         console.log(e)
    //     });
    //     return names;
    // }

    public async clickLastEpisode(webElement: ChainablePromiseElement) {
        webElement.waitForClickable();
        await this.performClick(webElement);
    }

    public async clickHomePageLogoButton() {
        this.homeButtonLogo.waitForClickable();
        await this.performClick(await this.homeButtonLogo)
    }

}


export default new HomePage();