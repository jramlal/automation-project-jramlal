const AuthPage = require('../pageobjects/auth.page');
const ProductPage = require('../pageobjects/product.page');

describe('Search Test Scenarios', () => {
    it('should search for one item', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.search("Quality Fitted Hat");

        await expect(ProductPage.fittedHatImg).toBeDisplayed();
        await expect(ProductPage.fittedHatTitle).toBeDisplayed();
        await expect(ProductPage.fittedHatTitle).toHaveText("Quality Fitted Hat");
        await expect(ProductPage.fittedHatPrice).toHaveText('$30');
        await expect(ProductPage.fittedHatPrice).toBeDisplayed();
        await expect(ProductPage.fittedHat).toBeDisplayed();

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should return no results when a number is searched', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.search("1337")

        await expect(ProductPage.fittedHatImg).not.toBeDisplayed();
        await expect(ProductPage.fittedHatTitle).not.toBeDisplayed();
        await expect(ProductPage.fittedHatPrice).not.toBeDisplayed();
        await expect(ProductPage.fittedHat).not.toBeDisplayed();

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should return no results when a special character is searched', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.search("@#$&")

        await expect(ProductPage.fittedHatImg).not.toBeDisplayed();
        await expect(ProductPage.fittedHatTitle).not.toBeDisplayed();
        await expect(ProductPage.fittedHatPrice).not.toBeDisplayed();
        await expect(ProductPage.fittedHat).not.toBeDisplayed();
    

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 
})