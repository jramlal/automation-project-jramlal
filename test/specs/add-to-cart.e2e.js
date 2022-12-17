

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

        await expect(CartPage.fittedHatName).toBeDisplayed();
        await expect(CartPage.fittedHatName).toHaveText('Quality Fitted Hat');
        await expect(CartPage.cartQuantity).toHaveText('1');
        await expect(CartPage.fittedHatPrice).toBeDisplayed();
        await expect(CartPage.fittedHatPrice).toHaveText('$30.00');

        await expect(CartPage.checkOutButton).toBeDisplayed(); 


        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should add an item to the cart then remove it', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();

        await expect(CartPage.fittedHatName).toBeDisplayed();
        await expect(CartPage.fittedHatName).toHaveText('Quality Fitted Hat');
        await expect(CartPage.cartQuantity).toHaveText('1');
        await expect(CartPage.fittedHatPrice).toBeDisplayed();
        await expect(CartPage.fittedHatPrice).toHaveText('$30.00');

        await CartPage.removeFromCart();

        await expect(CartPage.fittedHatName).not.toBeExisting();
        await expect(CartPage.cartQuantity).not.toBeDisplayed();
        
        await expect(CartPage.checkOutButton).not.toBeDisplayed(); 
    
        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should fail to add more than 20 items to cart', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.cartQuantityField.setValue('50');

        await ProductPage.addToCart(); 

        await expect(CartPage.fittedHatName).toBeDisplayed();
        await expect(CartPage.fittedHatName).toHaveText('Quality Fitted Hat');
        await expect(CartPage.cartQuantity).toHaveText('20');
        await expect(CartPage.fittedHatPrice).toBeDisplayed();

        await expect(CartPage.checkOutButton).toBeDisplayed(); 

    })
})