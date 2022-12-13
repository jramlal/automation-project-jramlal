const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');

describe('Product/Gallery/Homepage Test Scenarios', () => {
    it('Should verify that user can login and sign out from homepage', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!'); 
        await AuthPage.signOut();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
        browser.deleteCookies();
    }) 

    it('Should verify the contact button works', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.contactBtn.click();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/contact');     

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('Should verify the about button works', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.aboutBtn.click();
        await browser.switchWindow('https://qualityworkscg.com/automation-bootcamp/')
        await expect(browser).toHaveUrlContaining('qualityworkscg.com');
       

        //await AuthPage.signOut();
        browser.deleteCookies();
    }) 
})
