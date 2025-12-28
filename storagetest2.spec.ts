import { test } from '@playwright/test';
 

test.use({ storageState:'Utils/Leaftaps_Login.json' });
 
test('Contacts and Accounts', async ({ page }) => {
  await page.goto('http://leaftaps.com/opentaps/control/main');
 
  await page.click('text=CRM/SFA');
 

  await page.click('text=Contacts');
  await page.click('text=Create Contact');
  await page.locator('#firstNameField').fill('Mary');
  await page.locator('#lastNameField').fill('ANN');
 
  
  await page.click('text=Accounts');
  await page.click('text=Create Account');
  await page.locator('#accountName').fill('Playwright Trainer');
 
 
});

 