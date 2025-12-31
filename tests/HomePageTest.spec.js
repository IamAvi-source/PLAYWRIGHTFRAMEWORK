import {test,expect} from '@playwright/test';
import {HomePage} from '../pages/HomePage.js';
import {LoginPage} from '../pages/LoginPage.js';  
import testData from '../data/testData.json';

test.beforeEach(async({page})=>{

    await page.goto('/');

});

test('adminLink',async({page})=>{

    const loginPage=new LoginPage(page);
    const homePage=new HomePage(page)
    await loginPage.validUserLogin(testData.validUser.username,testData.validUser.password);
    await homePage.adminLinkFunctionality()
   

});