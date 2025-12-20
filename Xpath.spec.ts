import test from '@playwright/test';

test('Search iPhone', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  const continueButton = page.locator("//button[@class='a-button-text' and text()='Continue shopping']");
  await continueButton.click();
  const Searchitem = page.locator('//input[@id="twotabsearchtextbox"]');
  await Searchitem.fill('iPhone');
  await page.locator('//input[@id="nav-search-submit-button"]').click();
  await page.locator('//span[text()="512 GB & above"]').click();
 await page.locator('//button[@name="submit.addToCart"]').first().click();

  
});