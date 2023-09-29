import { test, expect } from '@playwright/test';

test('subscription test', async ({ page }) => {
  await page.goto('https://www.my-jewellery.com/');
  await page.goto('https://www.my-jewellery.com/en');
  await page.getByRole('link', { name: 'Dutch' }).click();
  await page.getByPlaceholder('E-mailadres').click();
  await page.getByPlaceholder('E-mailadres').fill('1');
  await page.getByLabel('Inschrijven').click();
  await page.getByText('Done. You\'ve subscribed').click();
  await expect(page.getByText('Done. You\'ve subscribed')).toContainText("Done")
  //await page.waitForTimeout(2);

  await page.close();
});