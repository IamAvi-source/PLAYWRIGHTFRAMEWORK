const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {

  constructor(page) {
    this.page = page;
    this.usernameInput = '[name="username"]';
    this.passwordInput = '[name="password"]';
    this.loginButton = '.oxd-button--main.orangehrm-login-button';
    this.verifyLogin ='.oxd-glass-button.orangehrm-upgrade-button';
    this.downArrowForLogoutLink ='.oxd-userdropdown-icon';
    this.invalidCredentialMessage ='.oxd-alert-content-text';
    this.orangeHRMLink='[href="http://www.orangehrm.com"]'
    this.contactSalesButton='//button[text()="Contact Sales"]'
    this.fullNameField='[id="Form_getForm_FullName"]';
    this.workEmailField='[name="email"]';
  }

  async validUserLogin(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
    await expect(this.page.locator(this.verifyLogin)).toBeVisible();
  }

  async invalidUserLogin(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    const invalidText = await this.page
      .locator(this.invalidCredentialMessage)
      .textContent();

    expect(invalidText).toContain('Invalid credentials');
  }


  async openOrangeHRMLink() {

  const [newPage] = await Promise.all([
    this.page.context().waitForEvent('page'),
    this.page.click(this.orangeHRMLink)
     
  ]);
  await newPage.waitForLoadState();
  await expect(newPage.locator(this.contactSalesButton)).toBeVisible();
  await newPage.click(this.contactSalesButton);
  await newPage.fill(this.fullNameField,'Test User');
  await newPage.close();
  await this.page.fill(this.usernameInput,'admin')
  await expect(this.page.locator(this.usernameInput))
  .toHaveValue('admin');


  
  

  return newPage;
}

};
