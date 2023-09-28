const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    recordVideo:{
        dir:"cz/videos"
    }
  });
  const page = await context.newPage();
  await page.goto('https://www.cz.nl/');
  await page.getByRole('link', { name: 'Necessary only' }).click();
  await page.getByRole('link', { name: 'Zorgverlener vinden' }).click();
  await page.getByRole('link', { name: 'Necessary only' }).click();
  await page.getByLabel('Om welke zorg gaat het?').click();
  await page.getByLabel('Om welke zorg gaat het?').fill('?');

  // ---------------------
  await context.close();
  await browser.close();
})();




