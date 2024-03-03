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
    protected open(path: string) {
        return browser.url(`https://www3.animeflv.net/${path}`)
    }

    protected async performClick(element: WebdriverIO.Element) {
        element.click();
        closeUnwantedTabs('www3.animeflv.net');
    }

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

async function closeUnwantedTabs(mainDomain: string) {
    const allTabs = await browser.getWindowHandles(); // Get all open tabs/windows
    for (const tab of allTabs) {
        await browser.switchToWindow(tab); // Switch to the tab
        const currentUrl = await browser.getUrl(); // Get the current tab's URL

        // Check if the current tab's domain is different from the main domain
        if (!currentUrl.includes(mainDomain)) {
            await await browser.closeWindow(); // Close the current tab if it's not part of the main domain
            const remainingTabs = await browser.getWindowHandles();
            await browser.switchToWindow(remainingTabs[0]);
        }
    }

    // After closing unwanted tabs, switch back to the first tab
    // const remainingTabs = await browser.getWindowHandles();
    // if (remainingTabs.length > 0) {
    //     await browser.switchToWindow(remainingTabs[0]);
    // }
}

