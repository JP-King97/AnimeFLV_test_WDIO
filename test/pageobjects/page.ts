import { browser } from '@wdio/globals'


/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {



    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    protected async open(path: string) {
        return await browser.url(`https://www3.animeflv.net/${path}`)
    }

    /**
     * Method to click on a web element
     * @param element web element subject of the click
     */
    protected async performClick(element: WebdriverIO.Element) {
        await element.click();
        await closeUnwantedTabs('www3.animeflv.net');
    }

    /**
     * Method to type the text in a web element
     * @param element web element where the text is going to be type
     * @param text string value to type
     */
    protected typeText(element: WebdriverIO.Element, text: string) {
        element.setValue(text);
    }

    get url(): Promise<string> {
        return browser.getUrl();
    }

    get title(): Promise<string> {
        return browser.getTitle();
    }


}

/**
 * Function to identify, close and switch ads tabs. This allows to close ads tabs and switch 
 * back to the page with that contains the domain.
 * @param mainDomain URL path that all the web pages of the website must contains
 */
async function closeUnwantedTabs(mainDomain: string) {
    const allTabs = await browser.getWindowHandles(); // Get all open tabs/windows
    for (const tab of allTabs) {
        await browser.switchToWindow(tab); // Switch to the tab
        const currentUrl = await browser.getUrl(); // Get the current tab's URL

        // Check if the current tab's domain is different from the main domain
        if (!currentUrl.includes(mainDomain)) {
            await browser.closeWindow(); // Close the current tab if it's not part of the main domain
            const remainingTabs = await browser.getWindowHandles();
            await browser.switchToWindow(remainingTabs[0]);
        }
    }

}

