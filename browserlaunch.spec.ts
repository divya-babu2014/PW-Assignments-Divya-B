import test, {chromium,firefox,webkit} from "@playwright/test";

test('launch the browser' ,async()=> {
    let browser = await chromium.launch({channel: 'chrome', headless: false});
    let context =await browser.newContext();
    let page = await context.newPage();
    await page.goto('https://www.facebook.com/');
    await page.waitForTimeout(4000);
});
