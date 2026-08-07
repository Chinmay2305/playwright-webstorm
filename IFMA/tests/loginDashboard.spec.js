// tests/loginDashboard.spec.js
// Grouped tests per user: login once per user and run all related TCs sequentially

const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');
const { users } = require('../test-data/users');

// Run user groups sequentially so one browser context handles all tests per user
test.describe.serial('User workflow grouped tests', () => {
  for (const user of users) {
    test.describe(`${user.email} workflow`, () => {
      let context;
      let page;
      let loginPage;
      let dashboardPage;

      test.beforeAll(async ({ browser }) => {
        // Create a dedicated context and page for this user
        context = await browser.newContext();
        page = await context.newPage();
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);

        // Login once per user
        await loginPage.goto();
        await loginPage.login(user.email, user.password);

        // Ensure landed on dashboard before running TCs
        await dashboardPage.verifyLandingUrl();
      });

      test.afterAll(async () => {
        await context.close();
      });

      // TC-1: Preview button should NOT be visible (per reverse case)
      test(`[TC-1] Preview button not visible for ${user.email}`, async () => {
        const preview = page.getByRole('button', { name: /Preview/i });
        const count = await preview.count();
        if (count === 0) {
          return; // pass when no preview buttons present
        }
        for (let i = 0; i < count; i++) {
          await expect(preview.nth(i)).not.toBeVisible({ timeout: 1000 });
        }
      });

      // TC-2: Direct navigation to /assessment shows locked popup
      test(`[TC-2] Assessment preview lock popup for ${user.email}`, async () => {
        await page.goto('https://sat.ifma-qa.devbyopeneyes.com/assessment');

        const header = page.locator("//h2[contains(@class,'swal2-title')]");
        const content = page.locator("//div[contains(@class,'swal2-html-container')]");

        await expect(header).toBeVisible({ timeout: 15000 });
        await expect(header).toHaveText('Assessment Preview Locked');

        await expect(content).toBeVisible({ timeout: 5000 });
        await expect(content).toHaveText('Assessment Preview is currently locked/unavailable.');
      });

      // Additional: verify dashboard cards (keeps original behavior)
      test(`[TC-3] Dashboard cards for ${user.email}`, async () => {
        // After TC-2 the page might have a modal blocking interactions — navigate back home first
        await page.goto('https://sat.ifma-qa.devbyopeneyes.com/landing-dashboard');
        await dashboardPage.verifyLandingUrl();
        await dashboardPage.verifyDashboardCards(user.expectedCards);
      });
    });
  }
});
