import loginInfo from "../Data/Leaf.json"

import test from '@playwright/test'

for(let data of loginInfo){

test(`Read the Value from JSON ${data.Tc_No}`,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
        await page.locator("#username").fill(data.Username)
        await page.locator("#password").fill(data.Password)
        await page.locator(".decorativeSubmit").click()

})
}