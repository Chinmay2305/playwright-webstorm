const { test, expect } = require('@playwright/test');

test('TC-1 Login and TC-2 Search by username and thread title', async ({ page }) => {
  // Navigate to login
  await page.goto('https://oe-discussion-board.devbyopeneyes.com/login');

  // Select Organization (handles native select or custom dropdown)
  await page.click('text=Select Organization');
  await page.click('text=AdminDB');

  // Fill credentials and sign in
  await page.fill('input[placeholder="Enter Username or Email"]', 'admindbclient@yopmail.com');
  await page.fill('input[placeholder="Enter Password"]', 'Admin@123');
  await page.click('button:has-text("Sign In")');

  // Wait for page to settle and ensure not on login page
  await page.waitForLoadState('networkidle');
  await expect(page).not.toHaveURL(/\/login/);

  // Common search selector
  const searchSelector = 'input[placeholder="Search by thread title and username"]';

  // TC-2a: Search by username
  await page.fill(searchSelector, 'firstuser');
  await page.press(searchSelector, 'Enter');

  // Verify results by locator "ti-user-name" (try data-testid then class)
  let userLocator = page.locator('[data-testid="ti-user-name"]');
  let userCount = await userLocator.count();
  if (userCount === 0) {
    userLocator = page.locator('.ti-user-name');
    userCount = await userLocator.count();
  }
  expect(userCount).toBeGreaterThan(0);

  // TC-2b: Search by thread title
  await page.fill(searchSelector, 'learn');
  await page.press(searchSelector, 'Enter');

  // Verify thread results using the provided XPath-like locator
  const threadLocator = page.locator("//div[contains(@class,'thread_heading text-break')]");
  const threadCount = await threadLocator.count();
  expect(threadCount).toBeGreaterThan(0);
});
