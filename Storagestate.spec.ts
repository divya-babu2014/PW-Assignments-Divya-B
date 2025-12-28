import test from '@playwright/test'

test("StorageState",async({page})=>{

await page.goto("http://leaftaps.com/opentaps/control/main")
await page.locator("#username").fill("DemoSalesManager")
await page.locator("#password").fill("crmsfa")
await page.click(".decorativeSubmit")

await page.context().storageState({path:"Utils/Leaftaps_Login.json"})


})
