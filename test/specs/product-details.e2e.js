const AuthPage = require('../pageobjects/auth.page');
const ProductDetailsPage = require('../pageobjects/product-details.page');

describe('Product Details Test Scenarios', () => {
    it('should add item to cart from product details page', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');
        await ProductDetailsPage.open();
        await ProductDetailsPage.addToCartBtn.waitForDisplayed();
        await ProductDetailsPage.addToCartBtn.scrollIntoView();
        await ProductDetailsPage.addToCart(); 

        await expect(ProductDetailsPage.checkOutBtn).toBeDisplayed(); 

        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should verify that quantity added on details page is reflected in the cart', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');
        await ProductDetailsPage.open();
        await ProductDetailsPage.addToCartBtn.waitForDisplayed();
        await ProductDetailsPage.addToCartBtn.scrollIntoView();
        await ProductDetailsPage.increaseQuantity();
        await ProductDetailsPage.addToCart(); 

        const quantity = await ProductDetailsPage.quantity.getAttribute('aria-valuenow');
        
        await expect(ProductDetailsPage.cartQuantity).toHaveText(quantity); 
        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should check if product title is displayed', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');
        await ProductDetailsPage.open();
        await ProductDetailsPage.addToCartBtn.waitForDisplayed();
        await expect(ProductDetailsPage.productTitle).toBeDisplayed();
        const title = await ProductDetailsPage.productTitle;
        await expect(title).toHaveText('Quality Fitted Hat');
       
    })
})