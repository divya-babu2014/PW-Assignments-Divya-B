import test from '@playwright/test'

test("Handle Single window",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")


const promise=context.waitForEvent('page')

await page.locator("//span[text()='Open']").click()


const childPage=await promise
await childPage.locator("//textarea[@id='message']").fill("Practise Window")
await childPage.waitForTimeout(5000)


childPage.close()


await page.locator("//span[text()='Open Multiple']").click()

await page.waitForTimeout(4000)


})