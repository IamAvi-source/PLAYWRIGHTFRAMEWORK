import {expect} from '@playwright/test';
import {LoginPage} from './LoginPage.js';
exports.HomePage=
class HomePage{
    constructor(page)
    {
        this.page=page;
        this.productlist='//div[@id="tbodyid"]/div/div/div/h4/a';
        this.addToCartButton='//a[text()="Add to cart"]';
        this.cart='[id="cartur"]';
        this.proAddedConfirmation='[src="imgs/Nexus_6.jpg"]';
        this.adminLink='[href="/web/index.php/admin/viewAdminModule"]'
        this.usernameField='(//input[@class="oxd-input oxd-input--active"])[2]'
        this.userRoleAdminDropdown='(//div[@class="oxd-select-text oxd-select-text--active"])[1]'
        this.adminValue='(//span[text()="Admin"])[2]'
        this.employeeNameField='//input[@placeholder="Type for hints..."]'
        this.statusDropdown='(//div[@class="oxd-select-text oxd-select-text--active"])[2]'
        this.elabledOption='//span[text()="Enabled"]'
        this.searchButton='//button[@type="submit"]'
        this.loginPage=new LoginPage(page); // this will enable to use the locators from login class
    }

    async adminLinkFunctionality()
    {
        await this.page.click(this.adminLink);
        await expect(this.page.locator(this.usernameField)).toBeVisible();
    }
  
}