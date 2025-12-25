import {test,expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage.js'; 
import testData from '../data/testData.json';


test.beforeEach(async({page})=>{

    
    await page.goto('/');

});


test('LoginTest @smoke@loginModule',async({page})=>{

    let loginPage=new LoginPage(page);
    await loginPage.validUserLogin(testData.validUser.username,testData.validUser.password);
    
});

test('InvalidLoginTest @regression@loginModule',async({page})=>{
    let loginPage=new LoginPage(page);
    await loginPage.invalidUserLogin(testData.invalidUser.username,testData.invalidUser.password);

});

test.only('orangeHRMLink @regression@loginModule',async({page})=>{
    let loginPage=new LoginPage(page);
    await loginPage.openOrangeHRMLink();
    await page.waitForTimeout(3000)
    
});

