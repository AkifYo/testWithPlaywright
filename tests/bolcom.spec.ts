import { test, expect } from '@playwright/test';

test('title has Nutella', async ({ page }) => {
  await page.goto('https://www.bol.com/nl/nl/');
  await page.getByRole('button', { name: 'Alles accepteren' }).click();
  await page.locator('[data-test="radio-button-nl"]').getByText('Nederland').click();
  await page.locator('[data-test="radio-button-dutch"]').getByText('Nederlands').click();
  await page.locator('[data-test="continue-button"]').click();
  await page.locator('[data-test="search_input_trigger"]').click();
  await page.locator('[data-test="search_input_trigger"]').fill('nutella');
  await page.locator('[data-test="search-button"]').click();
  await page.getByText('Nutella Hazelnootpasta - 1 x 3 kg').click();
  await page.locator('[data-test="product-title"] [data-test="title"]').click();
  await expect(page.locator('[data-test="product-title"] [data-test="title"]')).toContainText("Nutella");
  await page.close();
  
});