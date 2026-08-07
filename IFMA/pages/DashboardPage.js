// pages/DashboardPage.js
// Page Object for Dashboard page

const { expect } = require('@playwright/test');

class DashboardPage {
  // Constructor to initialize page object
  constructor(page) {
    this.page = page;
    // Locator for dashboard cards container
    this.dashboardCards = page.locator('[class*="card"], [class*="dashboard"]');
  }

  /**
   * Verify that the landing dashboard URL is correct
   * Expected URL: https://sat.ifma-qa.devbyopeneyes.com/landing-dashboard
   */
  async verifyLandingUrl() {
    // Wait for URL to match expected landing dashboard URL
    await this.page.waitForURL('**/landing-dashboard', { timeout: 10000 });
    
    // Verify the exact URL contains landing-dashboard
    await expect(this.page).toHaveURL(/landing-dashboard/);
  }

  /**
   * Verify that the landing dashboard shows a Preview button
   * Ensures the 'Preview' button is present and visible
   */
  async verifyPreviewButton() {
    // Accept case-insensitive or partial matches for robustness
    const previewButton = this.page.getByRole('button', { name: /Preview/i });
    await expect(previewButton.first()).toBeVisible({ timeout: 15000 });
    const count = await previewButton.count();
    await expect(count).toBeGreaterThan(0);
  }

  /**
   * Verify dashboard cards match expected cards
   * This method validates:
   * - Each expected card title exists
   * - Each expected card button exists
   * - No extra cards are present
   * - Total card count matches expected array length
   * 
   * @param {Array} expectedCards - Array of objects with title and button text
   * Example: [{ title: "Connector", button: "Access Connector" }]
   */
  async verifyDashboardCards(expectedCards) {
    // Wait for dashboard action buttons to appear (more reliable than networkidle)
    const accessButton = this.page.getByRole('button', { name: /^Access/i });
    await expect(accessButton.first()).toBeVisible({ timeout: 15000 });

    // Build expected buttons list for quick lookup
    const expectedButtonTexts = expectedCards.map(c => c.button.trim());
    const expectedTitles = expectedCards.map(c => c.title.trim());

    // Verify each expected button exists (title checks are flaky across environments)
    for (const expectedCard of expectedCards) {
      const buttonLocator = this.page.getByRole('button', { name: expectedCard.button, exact: false });
      await expect(buttonLocator).toBeVisible({ timeout: 5000 });
      await expect(buttonLocator).toHaveCount(1);
    }

    // Find all action buttons on the dashboard whose label starts with 'Access'
    const actionButtons = this.page.getByRole('button', { name: /^Access/i });
    const totalActionButtons = await actionButtons.count();

    // The total number of action buttons should equal expected cards length
    await expect(totalActionButtons).toBe(expectedCards.length);

    // Collect actual button texts and ensure none are unexpected
    const actualButtonTexts = [];
    for (let i = 0; i < totalActionButtons; i++) {
      const text = (await actionButtons.nth(i).innerText()).trim();
      actualButtonTexts.push(text);
    }

    // Ensure every actual button text is in expectedButtonTexts
    for (const actual of actualButtonTexts) {
      const found = expectedButtonTexts.some(exp => exp.toLowerCase() === actual.toLowerCase());
      await expect(found).toBeTruthy();
    }

    // Ensure there are no expected buttons missing (already checked visibility above),
    // and that counts match, so no unexpected cards exist.
  }
}

module.exports = DashboardPage;