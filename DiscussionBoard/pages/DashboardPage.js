// DashboardPage - POM for post-login dashboard
// Uses expect-based waits and Playwright best practices (avoid waitForNavigation unless guaranteed)
const { expect } = require('@playwright/test');

class DashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    // Prefer CSS/role selectors where possible. The Add Organization button sits in a float-end container.
    this.addOrganizationButton = page.locator("div.float-end >> button").nth(1); // second button in float-end

    // Profile button often is a button with an id prefix; use attribute-starts-with selector
    this.profileButton = page.locator('button[id^="dropdownMenuButton"]');
    // Sign out option inside dropdown; prefer role=menuitem if available
    this.signOutOption = page.locator('(//ul[contains(@class,"dropdown-menu")]/div/ul/li)[2]');

    // Username locator as requested: (//div[contains(@class,'user_profile')]/div/button/div)[2]/p
    this.usernameLocator = page.locator('div.user_profile div > button > div').nth(1).locator('p');
  }

  // Assert Add Organization button is visible
  async expectAddOrganizationVisible(timeout = 10000) {
    await expect(this.addOrganizationButton).toBeVisible({ timeout });
  }

  async getAddOrganizationText() {
    await expect(this.addOrganizationButton).toBeVisible({ timeout: 5000 });
    const txt = await this.addOrganizationButton.textContent();
    return txt ? txt.trim() : '';
  }

  // Return username text from profile area
  async getUsernameText() {
    await expect(this.usernameLocator).toBeVisible({ timeout: 10000 });
    const txt = await this.usernameLocator.textContent();
    return txt ? txt.trim() : '';
  }

  // Logout flow using expect-based waits. Do not assume navigation will always happen.
  async logout() {
    await expect(this.profileButton).toBeVisible({ timeout: 10000 });
    await this.profileButton.click();

    // If signOutOption resolved by role doesn't exist, fallback to locating by visible text
    if ((await this.signOutOption.count()) === 0) {
      const fallback = this.page.getByText(/sign out|signout|logout/i).first();
      await expect(fallback).toBeVisible({ timeout: 10000 });
      await fallback.click();
      return;
    }

    await expect(this.signOutOption).toBeVisible({ timeout: 10000 });
    await this.signOutOption.click();
  }
}

module.exports = { DashboardPage };
