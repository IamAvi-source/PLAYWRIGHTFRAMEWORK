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
        this.loginPage=new LoginPage(page);
    }

    async addProductToCart(productName)
    {
        const products=await this.page.$$(this.productlist);
        for(const product of products)
        {
            if(productName==await product.textContent())
            {
                await product.click();
                break;
            }
        }
        await this.page.on('dialog', async dialog => {
            if (dialog.message().includes('Product added')) {
                await dialog.accept();    
            }
        });
    }

    async goToCart(productName)
    {
        await this.page.click(this.cart);

        // Wait for the cart page to load and check for the product name
        const productInCart = this.page.locator(`td:has-text(\"${productName}\")`);
        await expect(productInCart).toBeVisible();
    }    
}