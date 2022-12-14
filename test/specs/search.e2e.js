const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');

describe('Search Test Scenarios', () => {
    it('should search for one item', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.search("Quality Fitted Hat")

        await expect(await $('.chakra-text.css-1n64n71')).toHaveText("Quality Fitted Hat")

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should return no results when a number is searched', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.search("1337")

        await expect(await $('.chakra-text.css-1n64n71')).not.toBeDisplayed();

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should return no results when a special character is searched', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.search("@")

        await expect(await $('.chakra-text.css-1n64n71')).not.toBeDisplayed();
    

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 
})


