import test from '@playwright/test'
test ("Frame object for nested frame",async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    await page.frame({url:"https://www.leafground.com/framebutton.xhtml"})?.locator("#Click").click()

})