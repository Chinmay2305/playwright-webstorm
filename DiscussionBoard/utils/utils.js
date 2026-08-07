// Generic utility functions for tests
module.exports = {
  // Sleep helper (avoid when possible; prefer Playwright waits)
  sleep: (ms) => new Promise(resolve => setTimeout(resolve, ms))
};
