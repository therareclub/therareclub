const { chromium } = require('playwright');

(async () => {
  try {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1000, height: 1100 });
    await page.goto('http://localhost:3000/journal-render.html');
    await page.waitForLoadState('networkidle');
    const el = await page.waitForSelector('.book-container');
    await el.screenshot({ path: 'public/journal.png', omitBackground: true });
    await el.screenshot({ path: 'public/journal-cover.png', omitBackground: true });
    await browser.close();
    console.log('SUCCESS_RENDERED_JOURNAL');
  } catch (err) {
    console.error('ERROR_RENDERING:', err);
    process.exit(1);
  }
})();
