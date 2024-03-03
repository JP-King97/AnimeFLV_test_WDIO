import Page from "./page.ts";

class RegistrationPage extends Page {

    get AnimeFLVLogo() { return $('img[alt="AnimeFLV"]') }

    public open() {
        return super.open('auth/sign_up');
    }

    /**
     * Method to check if the Logo element exists
     * @returns a boolean that states if the Logo exist in the DOM
     */
    public logoExists(): Promise<boolean> {
        return this.AnimeFLVLogo.isExisting();
    }


}
export default new RegistrationPage();