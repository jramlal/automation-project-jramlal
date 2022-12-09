

const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');

describe('Add To Cart Test Scenarios', () => {
    it('should add one item to cart', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();
        await ProductPage.addToCart();

        await expect(CartPage.checkOutButton).toBeDisplayed(); 

        await CartPage.removeFromCart(); 

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should add an item to the cart then remove it', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();
        await CartPage.removeFromCart();

        await expect(CartPage.checkOutButton).toBeDisplayed({ reverse: true }); 
    
        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should add multiple items to cart', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCartMultiple();

        await expect(CartPage.checkOutButton).toBeDisplayed(); 

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 
})