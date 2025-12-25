import {test,expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage.js';
import {LoginPage} from '../pages/LoginPage.js';  

test.beforeEach(async({page})=>{

    await page.goto('/');

});

test('AddProductToCartTest',async({page})=>{

    const loginPage=new LoginPage(page);
    await loginPage.userlogin('pavanol','test@123');
    await page.waitForTimeout(3000);

    const homePage=new HomePage(page);
    await homePage.addProductToCart('Nexus 6');
    await page.waitForTimeout(3000);
    await homePage.goToCart('Nexus 6');
});