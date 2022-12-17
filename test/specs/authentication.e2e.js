

const AuthPage = require('../pageobjects/auth.page');
const ProductPage = require('../pageobjects/product.page');
const { faker } = require('@faker-js/faker');
const userData = require('../data/users');


describe('Authentication Test Scenarios', () => {
    it('should login with valid credentials', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await expect(browser).toHaveUrl("https://ui-automation-camp.vercel.app/products");
        await expect(AuthPage.btnSignOut).toBeDisplayed(); 
        await expect(AuthPage.pageHeader).toHaveText('Automation Camp Store');
        await expect(ProductPage.fittedHat).toBeDisplayed();
        await expect(AuthPage.shopNow).toHaveText('Shop Now,');

        await AuthPage.signOut();
    })

    it('should create an account with credentials generated by faker', async () => { 

        const email = faker.internet.email();
        const password = (faker.random.alphaNumeric(8) + "!");

        await AuthPage.open(); 

        await AuthPage.signUp(email, password);

        await expect(browser).toHaveUrl("https://ui-automation-camp.vercel.app/products");
        await expect(AuthPage.btnSignOut).toBeDisplayed(); 
        await expect(AuthPage.pageHeader).toHaveText('Automation Camp Store');
        await expect(ProductPage.fittedHat).toBeDisplayed();
        await expect(AuthPage.shopNow).toHaveText('Shop Now,');

        await AuthPage.signOut(); 
    })

    it('should fail to create an account with no password', async () => { 

        const email = faker.internet.email();

        await AuthPage.open(); 

        await AuthPage.signUp(email, " ");

        await expect(AuthPage.passwordErrorMsg).toBeDisplayed();
        await expect(AuthPage.btnSubmit).toBeDisplayed();
        await expect(AuthPage.signUpTitle).toBeDisplayed();
    })
    
})


describe('Data-Driven Sign Up Test Scenario', () => {
    for (const record of userData) {
        it(`should attempt to create an account under ${record.email}`, async () => {
            await AuthPage.open();
            await AuthPage.signUp(record.email,record.email);

            if (record.email === 'hansel@catfish.com' ){
                await expect(AuthPage.btnSubmit).toBeDisplayed();
                await expect(AuthPage.signUpTitle).toBeDisplayed();
                await expect(AuthPage.signUpTitle).toHaveText(record.expectedTitle);
            } else {
                await expect(browser).toHaveUrl(record.expectedUrl);
                await expect(AuthPage.btnSignOut).toBeDisplayed(); 
                await expect(AuthPage.pageHeader).toHaveText(record.expectedTitle);
                await expect(ProductPage.fittedHat).toBeDisplayed();
                await AuthPage.signOut();
            }
        })
    }    
})