import test from '@playwright/test'

test.describe("Test Describe",()=>{

    test.describe.configure({mode:'default',retries:1})

    test("TestCase 1",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
    })

    test("TestCase 2",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
    })

    test("TestCase 3",async({page})=>{
   await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill("Demosalesmanager")
        await page.locator("#password").fill("crmsfa")
        await page.locator(".decorativeSubmit").click()
    })



















})