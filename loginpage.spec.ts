import test from "@playwright/test";

test('Salesforce login', async ({ page }) => {
  await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()

    await page.waitForTimeout(10000)
    let title= await page.title()
    
    console.log(title)
    await page.click('button[title="App Launcher"]')

})