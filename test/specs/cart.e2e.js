

const AuthPage = require('../pageobjects/auth.page');
const cartPage = require('../pageobjects/cart.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');

describe('Cart Test Scenarios', () => {
    it('should add item and increase quantity', async () => {
        
        const description = "3 Pack Unisex Vintage Washed Distressed Baseball-Cap,Retro Adjustable Dad Hats,Baseball Hat for Men Women"
        
        
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();
        await ProductPage.addToCart();
        await CartPage.openDetailedCart.click()


        await expect(CartPage.fittedHatName).toBeDisplayed();
        await expect(CartPage.fittedHatName).toHaveText('Quality Fitted Hat');
        await expect(CartPage.fittedHatDesc).toBeDisplayed();
        await expect(CartPage.fittedHatDesc).toHaveText(description);
        await expect(CartPage.cartQuantity).toHaveText('1');
        await expect(CartPage.fittedHatPrice).toBeDisplayed();
        await expect(CartPage.fittedHatPrice).toHaveText('$30.00');

        await CartPage.increaseItemQuantity();

        await expect(CartPage.cartQuantity).toHaveText('2');
        await expect(CartPage.topRightQuantity).toHaveText('2');
        
      
        await CartPage.exitCartBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should prevent checkout with an empty cart', async () => {
        
        const description = "3 Pack Unisex Vintage Washed Distressed Baseball-Cap,Retro Adjustable Dad Hats,Baseball Hat for Men Women"
        
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();
        await ProductPage.addToCart();
        await CartPage.openDetailedCart.click()

        await expect(CartPage.fittedHatName).toBeDisplayed();
        await expect(CartPage.fittedHatName).toHaveText('Quality Fitted Hat');
        await expect(CartPage.fittedHatDesc).toBeDisplayed();
        await expect(CartPage.fittedHatDesc).toHaveText(description);
        await expect(CartPage.cartQuantity).toHaveText('1');
        await expect(CartPage.fittedHatPrice).toBeDisplayed();
        await expect(CartPage.fittedHatPrice).toHaveText('$30.00');

        await CartPage.decreaseItemQuantity(); 

        await expect(CartPage.fittedHatName).not.toBeExisting();
        await expect(CartPage.fittedHatDesc).not.toBeExisting();

        await expect(CartPage.checkOutButton).not.toBeDisplayed(); 

        
        await CartPage.exitCartBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies();
    })

   
    it('should add multiple items to the cart and check if the total price is correct', async () => {

        
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCartMultiple();


        var price1 = await CartPage.hatPrice.getText();
        var price2 = await CartPage.pillowPrice.getText();

        var price1 = price1.replace("$", " ");
        var price2 = price2.replace("$", " ");


        var total = parseInt(price1) + parseInt(price2)
      
        total.toString();

        var total = "$" + total + ".00"

        
        await expect(CartPage.totalPrice).toHaveText(total);

        await AuthPage.signOut();
        browser.deleteCookies();
    })
})     