// Tests: Admin and User login flows with validations and sign out
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { DashboardPage } = require('../pages/DashboardPage');
const creds = require('../testData/credentials.json');

// Admin login test
test('Admin: Verify Admin User Login And Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.selectOrganisation(creds.admin.organisation);
  await loginPage.login(creds.admin.email, creds.admin.password);

  // Validate Add Organization button and text
  let passed = true;
  try {
    await dashboard.expectAddOrganizationVisible(10000);
    const text = await dashboard.getAddOrganizationText();
    if (text === 'Add Organization') {
      console.log('its correct');
    } else {
      console.log('its not logging in');
      passed = false;
    }
    expect(text).toBe('Add Organization');
  } catch (err) {
    console.log('its not logging in');
    passed = false;
    throw err;
  }

  // Logout
  await dashboard.logout();
  const loginButton = page.locator('form >> button[type="submit"]');
  await expect(loginButton).toBeVisible({ timeout: 10000 });
  await expect(page).toHaveURL(/.*\/login/);
});

// User login test (separate)
test('User: Verify User Login And Logout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboard = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.selectOrganisation(creds.user.organisation);
  await loginPage.login(creds.user.email, creds.user.password);

  // Validate username in profile area
  try {
    const username = await dashboard.getUsernameText();
    if (username === creds.user.expectedUsername) {
      console.log('its correct');
    } else {
      console.log('its not logging in');
    }
    expect(username).toBe(creds.user.expectedUsername);
  } catch (err) {
    console.log('its not logging in');
    throw err;
  }

  // Logout
  await dashboard.logout();
  const loginButton = page.locator('form >> button[type="submit"]');
  await expect(loginButton).toBeVisible({ timeout: 10000 });
  await expect(page).toHaveURL(/.*\/login/);
});
