// Playwright configuration
// - HTML reporter enabled
// - Screenshots only on failure
// - Base URL configurable via BASE_URL env var
const { defineConfig } = require('@playwright/test');
require('dotenv').config();

const baseURL = process.env.BASE_URL || 'https://oe-discussion-board.devbyopeneyes.com';

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL,
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    // Capture screenshot only on failure
    screenshot: 'only-on-failure',
    // Retain trace/video on failure for debugging
    trace: 'retain-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]]
});
