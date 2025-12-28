import test from '@playwright/test'
test ("Frame locator for nested frame",async({page})=>{
    await page.goto("https://www.leafground.com/frame.xhtml")
    
 await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()  
   
})