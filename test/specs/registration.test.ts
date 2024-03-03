import homePage from "../pageobjects/home.page.ts"
import registrationPage from "../pageobjects/registration.page.ts";


describe('The registration feature', () => {
    it('should redirect the user to the registration page', async () => {
        await homePage.open();
        await browser.maximizeWindow();
        await homePage.pressLoginButton();
        //await browser.pause(3000);
        await homePage.pressRegistrationLink();
        //await browser.pause(3000);
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('sign_up'),
            {
                timeout: 3000, // Wait up to 3000 milliseconds or 3 seconds
                timeoutMsg: 'Expected URL to contain "sign_up" after 3 seconds'
            }
        );
        await expect(await browser.getUrl()).toContain('sign_up');
        //await browser.pause(3000);
    })

    it('should display the registration form once the registration page is display', async () => {
        await expect(registrationPage.AnimeFLVLogo).toExist();
    })

    it
})