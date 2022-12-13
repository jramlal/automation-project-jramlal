const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const ProductPage = require('../pageobjects/product.page'); 
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
        
        await CheckoutPage.checkoutInfo(fullName,email,streetAddress,"1337",city,"US","FL","12345");
        await CheckoutPage.paymentInfo(cardNum, cardExp, cardCvv); 
        
        await expect(CheckoutPage.invoiceNum).toBeDisplayed();
        await expect(CheckoutPage.orderTitle).toHaveText('Thank you for your order');

        await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/order/');

        await AuthPage.signOut();
        browser.deleteCookies(); 
    })
}) 