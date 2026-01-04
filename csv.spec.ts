import { test } from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'




const a:any[]=parse(fs.readFileSync("Data/Leaftaps.csv"),{columns:true})

for(let data of a){

    test(`Read the value from CSV ${data.TestCaseId}`,async({page})=>{

        await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(data.Username)
        await page.locator("#password").fill(data.Password)
        console.log(data.Username)
        await page.locator(".decorativeSubmit").click()
    })
}