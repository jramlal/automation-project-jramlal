const AuthPage = require('../pageobjects/auth.page');
const CartPage = require('../pageobjects/cart.page');
const CheckoutPage = require('../pageobjects/checkout.page');
const ProductPage = require('../pageobjects/product.page');
const MailSlurp = require('mailslurp-client').default;
const apiKey = "946b9da5a8d9b703d236c5bb6a845fd1f8ab30d7afdabdef552528f5185a7541";
const { faker } = require('@faker-js/faker');

const mailslurp = new MailSlurp( {apiKey} );


describe('Email Confirmation Test Scenarios', () => {
    it('should create an account and verify confirmation email was received', async () => { 

        const password = (faker.random.alphaNumeric(10) + "!");

        const inbox = await mailslurp.createInbox();

        await AuthPage.open(); 

        await AuthPage.signUp(inbox.emailAddress, password);
        
        await expect(browser).toHaveUrl("https://ui-automation-camp.vercel.app/products");
        await expect(AuthPage.pageHeader).toHaveText('Automation Camp Store');
    

        const email = await mailslurp.waitForLatestEmail(inbox.id, 30000);

        await expect(email.subject).toEqual('Verify your email');   
        await expect(email.from).toEqual('no-reply@auth0user.net');
        
        

        await AuthPage.signOut(); 
    })  
    
    it.only('Should purchase an item and verify confirmation email was received', async () => {

        const fullName = faker.name.fullName();
        const streetAddress = faker.address.streetAddress();
        const city = faker.address.cityName();

        const cardNum = "4242424242424242";
        const cardExp = "06/25";
        const cardCvv = "123";

        const inbox = await mailslurp.createInbox()

        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.fittedHat.waitForDisplayed(); 
        await ProductPage.fittedHat.scrollIntoView();

        await ProductPage.addToCart();
        await CartPage.checkOutButton.click();
        
        await CheckoutPage.checkoutInfo(fullName,inbox.emailAddress,streetAddress,"1337",city,"United States","Florida","12345");
        await CheckoutPage.placeOrderBtn.waitForDisplayed();
        const iframe = await $('.snipcart-payment-card-form iframe');
        await browser.switchToFrame(iframe);
        await CheckoutPage.paymentInfo(cardNum, cardExp, cardCvv); 

        const email = await mailslurp.waitForLatestEmail(inbox.id, 30000)
        
        await expect(CheckoutPage.invoiceNum).toBeDisplayed();
        await expect(CheckoutPage.orderConfTitle).toHaveText('Thank you for your order');
        await expect(browser).toHaveUrlContaining('https://ui-automation-camp.vercel.app/products#/order/');
        
    
        await expect(email.from).toEqual("nyranmoodie@gmail.com");

        
        await CheckoutPage.exitOrderConfBtn.click();
        await AuthPage.signOut();
        browser.deleteCookies(); 
    })
    
})