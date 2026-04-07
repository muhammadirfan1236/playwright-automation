


const { test, expect } = require('@playwright/test');

test('OrangeHRM Login Test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  await page.fill('input[name="username"]', 'Admin');
  await page.fill('input[name="password"]', 'admin123');

  await page.click('button[type="submit"]');

  await expect(page).toHaveURL(/dashboard/);
});