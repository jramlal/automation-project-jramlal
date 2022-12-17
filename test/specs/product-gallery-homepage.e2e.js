const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const ProductPage = require('../pageobjects/product.page');
const ContactPage = require('../pageobjects/contact.page');



describe('Product/Gallery/Homepage Test Scenarios', () => {
    it('Should verify that user can login and sign out from homepage', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!'); 
        await AuthPage.signOut();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/');
        await expect(AuthPage.btnSignUpOrRegister).toBeDisplayed();
        await expect(AuthPage.welcomeBanner).toBeDisplayed();

        browser.deleteCookies();
    }) 

    it('Should verify the contact button works', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.contactBtn.click();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/contact');     
        await expect(ContactPage.twitterBtn).toBeDisplayed();
        await expect(ContactPage.contactBanner).toHaveText('Want to get in touch?');

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('Should verify the about button works', async () => {
        
        const qualityWorksLogo = await $("div[id='header-wrapper'] img:nth-child(1)");
        const contactUS = await $(".wtbx-button.wtbx-button-primary");

        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.aboutBtn.click();
        await browser.switchWindow('https://qualityworkscg.com/automation-bootcamp/')
        await expect(browser).toHaveUrlContaining('qualityworkscg.com');
        await expect(qualityWorksLogo).toBeDisplayed();
        await expect(contactUS).toBeDisplayed();
       
        await browser.switchWindow('https://ui-automation-camp.vercel.app/products')
        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should not allow special characters in quantity field, should revert to 1', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.cartQuantityField.setValue('+');

        await ProductPage.addToCart(); 

        await expect(CartPage.fittedHatName).toBeDisplayed();
        await expect(CartPage.fittedHatName).toHaveText('Quality Fitted Hat');
        await expect(CartPage.cartQuantity).toHaveText('1');
        await expect(CartPage.fittedHatPrice).toBeDisplayed();

        await expect(CartPage.checkOutButton).toBeDisplayed(); 

        await AuthPage.signOut();
        browser.deleteCookies();
    })
})
