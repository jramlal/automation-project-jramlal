

const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');

describe('Cart Test Scenarios', () => {
    it('should add item and increase quantity', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();
        await ProductPage.addToCart();

        const quantity = await $('.snipcart__font--secondary.snipcart__font--regular')

        await CartPage.increaseItemQuantity();
        await expect(quantity).toHaveText('2');
        
      

        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should add item and decrease quantity to zero then check if cart is empty', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();
        await ProductPage.addToCart();

        await CartPage.decreaseItemQuantity(); 
    
        await expect(CartPage.checkOutButton).toBeDisplayed({ reverse: true }); 

        

        await AuthPage.signOut();
        browser.deleteCookies();
    })

   
    it('should add multiple items to the cart and check if the total price is correct', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCartMultiple();

        const price1 = await CartPage.hatPrice.getText();
        const price2 = await CartPage.pillowPrice.getText(); 

        const total = parseFloat(price1) + parseFloat(price2);

        expect(total).toHaveTextContaining(await CartPage.totalPrice.getText())

        await AuthPage.signOut();
        browser.deleteCookies();
    })
})     