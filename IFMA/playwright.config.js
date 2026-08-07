// playwright.config.js
// Configuration file for Playwright test framework

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,
  reporter: [[ 'html', { open: 'always' } ]],
  use: {
    // Set base URL for all tests
    baseURL: 'https://admin.ifma-qa.devbyopeneyes.com',
    // Capture screenshot on failure
    screenshot: 'only-on-failure',
    // Record video on failure
    video: 'retain-on-failure',
    // Trace on failure for debugging
    trace: 'on-first-retry',
  },

  // Configure browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Optional: Configure test timeout
  timeout: 60 * 1000,
});