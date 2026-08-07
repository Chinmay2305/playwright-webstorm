// pages/LoginPage.js
// Page Object for Login page

class LoginPage {
  // Constructor to initialize page object
  constructor(page) {
    this.page = page;
    // Locators for login page elements
    this.usernameInput = page.locator('#UsernameEmail');
    this.passwordInput = page.locator('#Password');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
  }

  /**
   * Navigate to authentication page
   */
  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');
  }

  /**
   * Perform login with email and password
   * @param {string} email - User email address
   * @param {string} password - User password
   */
  async login(email, password) {
    // Fill username/email field
    await this.usernameInput.fill(email);
    
    // Fill password field
    await this.passwordInput.fill(password);
    
    // Click login button
    await Promise.all([
      this.page.waitForURL('**/landing-dashboard'),
      this.loginButton.click()
    ]);
  }
}

module.exports = LoginPage;
