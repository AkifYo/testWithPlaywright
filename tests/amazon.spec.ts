import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.com/');
  await page.getByPlaceholder('Search Amazon').click();
  await page.getByPlaceholder('Search Amazon').fill('samsung');
  await page.getByRole('button', { name: 'Go' }).click();
  await page.getByLabel('Brands', { exact: true }).getByRole('link', { name: 'SAMSUNG' }).click();
  await page.getByPlaceholder('Max').click();
  await page.getByPlaceholder('Max').fill('500');
  await page.getByLabel('Price').getByLabel('Go').click();
  await page.getByRole('link', { name: 'SAMSUNG Galaxy Buds2 True Wireless Earbuds Noise Cancelling Ambient Sound Bluetooth Lightweight Comfort Fit Touch Control,...' }).click();
  await page.goto('https://www.amazon.com/Wireless-Cancelling-Bluetooth-Lightweight-International/dp/B09CKF166Y/ref=sr_1_3?crid=3NPTZAH624ZSX&keywords=samsung&qid=1696446651&refinements=p_89%3ASAMSUNG%2Cp_36%3A-50000&rnid=2491154011&s=wireless&sprefix=samsung%2Caps%2C279&sr=1-3&th=1');
  await page.getByLabel('Amazon', { exact: true }).click();
  await page.close;
});