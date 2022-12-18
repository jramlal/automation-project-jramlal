const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const ProductPage = require('../pageobjects/product.page'); 
const checkoutData = require('../data/checkout')
const { faker } = require('@faker-js/faker');



describe('Checkout Test Scenarios', () => {
    it('Should add an item to cart and check it out', async () => {

        const fullName = faker.name.fullName();
        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1];
        const email = faker.internet.email(firstName, lastName, 'gmail.com');
        const streetAddress = faker.address.streetAddress();
        const city = faker.address.cityName();

        const cardNum = "4242424242424242";
        const cardExp = "06/25";
        const cardCvv = "123";


        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();
        await CartPage.checkOutButton.click();
        
        await CheckoutPage.checkoutInfo(fullName,email,streetAddress,"1337",city,"United States","Florida","12345");
        await CheckoutPage.placeOrderBtn.waitForDisplayed();
        const iframe = await $('.snipcart-payment-card-form iframe');
        await browser.switchToFrame(iframe);
        await CheckoutPage.paymentInfo(cardNum, cardExp, cardCvv); 
        
        await expect(CheckoutPage.invoiceNum).toBeDisplayed();
        await expect(CheckoutPage.orderConfTitle).toHaveText('Thank you for your order');
        await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/order/');

        await CheckoutPage.exitOrderConfBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies(); 
    }) 

    it('Should add an item to cart and fail to continue to payment without missing information', async () => {

        const fullName = faker.name.fullName();
        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1];
        const email = faker.internet.email(firstName, lastName, 'gmail.com');
        const streetAddress = faker.address.streetAddress();
        const city = " ";
        

        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();
        await CartPage.checkOutButton.click();
        
        await CheckoutPage.checkoutInfo(fullName,email,streetAddress,"1337",city,"United States","Florida","12345");
        
        await expect(CheckoutPage.fullname).toBeDisplayed();
        await expect(CheckoutPage.email).toBeDisplayed();
        await expect(CheckoutPage.streetAddress1).toBeDisplayed();
        await expect(CheckoutPage.apartment).toBeDisplayed();
        await expect(CheckoutPage.city).toBeDisplayed();
        await expect(CheckoutPage.country).toBeDisplayed();
        await expect(CheckoutPage.province).toBeDisplayed();
        await expect(CheckoutPage.zcode).toBeDisplayed();
        await expect(CheckoutPage.continueToPaymentBtn).toBeDisplayed();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products#/checkout');

        await CheckoutPage.exitOrderConfBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies(); 
    })    

    it('Should check if edit button works', async () => {

        const fullName = faker.name.fullName();
        const firstName = fullName.split(" ")[0];
        const lastName = fullName.split(" ")[1];
        const email = faker.internet.email(firstName, lastName, 'gmail.com');
        const streetAddress = faker.address.streetAddress();
        const city = faker.address.cityName();
        

        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();
        await CartPage.checkOutButton.click();
        
        await CheckoutPage.checkoutInfo(fullName,email,streetAddress,"1337",city,"United States","Florida","12345");
    
        await CheckoutPage.editBtn.scrollIntoView();
        await CheckoutPage.editBtn.waitForDisplayed();
        await CheckoutPage.editBtn.click(); 

        await expect(CheckoutPage.fullname).toBeDisplayed();
        await expect(CheckoutPage.email).toBeDisplayed();
        await expect(CheckoutPage.streetAddress1).toBeDisplayed();
        await expect(CheckoutPage.apartment).toBeDisplayed();
        await expect(CheckoutPage.city).toBeDisplayed();
        await expect(CheckoutPage.country).toBeDisplayed();
        await expect(CheckoutPage.province).toBeDisplayed();
        await expect(CheckoutPage.zcode).toBeDisplayed();
        await expect(CheckoutPage.continueToPaymentBtn).toBeDisplayed();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products#/checkout');

        await CheckoutPage.exitOrderConfBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies(); 
    })
}) 

describe.only('Data-Driven Checkout Test Scenario', () => {
    for (const record of checkoutData) {
        it(`should attempt to checkout an item for ${record.fullName}`, async () => {

        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();
        await CartPage.checkOutButton.click();
        
        await CheckoutPage.checkoutInfo(record.fullName,record.email,record.streetAddress,record.apt,record.city,record.country,record.province,record.zipcode);
        await CheckoutPage.placeOrderBtn.waitForDisplayed();
        const iframe = await $('.snipcart-payment-card-form iframe');
        await browser.switchToFrame(iframe);
        await CheckoutPage.paymentInfo(record.cardNumber, record.cardExp, record.cardCVV); 
        
        await expect(CheckoutPage.invoiceNum).toBeDisplayed();
        await expect(CheckoutPage.orderConfTitle).toHaveText(record.expectedMsgTitle);
        await expect(browser).toHaveUrlContaining(record.expectedUrl);

        await CheckoutPage.exitOrderConfBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies();
            
        })
    }    
})