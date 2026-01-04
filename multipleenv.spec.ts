import dotenv from'dotenv'
import test from 'playwright/test'

//read multiple env -> fileName
const fileToRead=process.env.envFile||'prod'
dotenv.config({path:`Data/${fileToRead}.env`})

test("Login with ENV File",async({page})=>{


let url=process.env.SF_Url as string
let uName=process.env.SF_Username as string
let pass=process.env.SF_Password as string

    await page.goto(url)
        await page.locator("#username").fill(uName)
        await page.locator("#password").fill(pass)
        await page.locator(".decorativeSubmit").click()
    
})