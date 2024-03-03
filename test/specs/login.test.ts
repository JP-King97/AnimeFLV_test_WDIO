import HomePage from '../../test/pageobjects/home.page.ts'

describe('The login feature ', () => {
    it('should login from the Home page "login div', async () => {
        await HomePage.open();
        await browser.maximizeWindow();
        await HomePage.pressLoginButton();
        await HomePage.typeEmail('JPQM4897@hotmail.com');
        await HomePage.typePassword('juegos');
        await HomePage.pressSubmitButton();
        await expect(await HomePage.getWelcomeText()).toContain('BIENVENID@');
    });
})

