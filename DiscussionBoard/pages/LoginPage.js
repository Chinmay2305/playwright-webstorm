// LoginPage - Page Object Model for the login screen
// Uses the specific input locators requested (index-based) for compatibility with the application.
const { expect } = require('@playwright/test');

class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Kendo dropdown element
    this.organisationDropdown = page.locator('kendo-dropdownlist');
    // Use explicit index-based locators as requested
    this.emailField = page.locator('(//input)[1]');
    this.passwordField = page.locator('(//input)[2]');
    // login button inside the form (strict CSS)
    this.loginButton = page.locator('form >> button[type="submit"]');
  }

  // Navigate to login route relative to baseURL
  async goto() {
    await this.page.goto('/login');
    await expect(this.loginButton).toBeVisible({ timeout: 10000 });
  }

  // Select organisation by visible name. Uses getByRole/getByText when available, with fallbacks.
  async selectOrganisation(name) {
    const dropdown = this.organisationDropdown;
    await expect(dropdown).toBeVisible({ timeout: 10000 });
    await dropdown.click();

    // Try semantic option first
    if ((await this.page.getByRole('option', { name }).count()) > 0) {
      await this.page.getByRole('option', { name }).click();
      return;
    }

    if ((await this.page.getByText(name, { exact: true }).count()) > 0) {
      await this.page.getByText(name, { exact: true }).click();
      return;
    }

    // Fallback: click visible text node
    const option = this.page.locator(`text="${name}"`);
    await expect(option).toBeVisible({ timeout: 10000 });
    await option.click();
  }

  // Perform login using the explicit input locators
  async login(email, password) {
    await expect(this.emailField).toBeVisible({ timeout: 10000 });
    await this.emailField.fill(email);

    await expect(this.passwordField).toBeVisible({ timeout: 10000 });
    await this.passwordField.fill(password);

    // Click submit. Tests should assert post-login UI elements explicitly rather than relying on navigation.
    await this.loginButton.click();
  }
}

module.exports = { LoginPage };
