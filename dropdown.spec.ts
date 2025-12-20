import { test } from '@playwright/test';


  test("Dropdown", async ({ page }) => {
    await page.goto('https://www.telerik.com/contact');
    

    // First dropdown -> select by index
     await page.selectOption("#Dropdown-1",{index:2})

    // Second dropdown -> select by value
    await page.selectOption("#Dropdown-2",{value:"DevCraft"})

    // Third dropdown -> select by label
    await page.selectOption("#Country-1",{label:"Albania"})
  });
