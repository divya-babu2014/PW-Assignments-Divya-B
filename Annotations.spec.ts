import test from '@playwright/test'

test.skip("Test.Skip",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
})

test("Test",async({page})=>{
    await page.goto("https://www.pvrcinemas.com")
})


test.fail("test.fail",async({page})=>{
    await page.goto("https://www.facebook.com")
})

test.fixme("test.fixme",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
})

test("test.info",async({page})=>{

    test.info().annotations.push({type:'Sanity Testing',description:'Testing a Function'},
        {type:'Creator',description:'Divya B'})

    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
})

test.only("test.only",async({page})=>{
    await page.goto("https://www.amazon.in")
})