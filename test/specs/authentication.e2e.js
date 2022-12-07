

const AuthPage = require('../pageobjects/auth.page');
const { faker } = require('@faker-js/faker');


describe('Authentication Test Scenarios', () => {
    it('should login with valid credentials', async () => {
        await AuthPage.open(); 

        await AuthPage.login('luffy@onepiece.com', 'Password123!');

        await expect(browser).toHaveUrl("https://ui-automation-camp.vercel.app/products");
        await expect(AuthPage.btnSignOut).toBeDisplayed(); 

        await AuthPage.signOut();
    })

    it('should create an account with credentials gerenated by faker', async () => { 

        const email = faker.internet.email();
        const password = (faker.random.alphaNumeric(8) + "!");

        await AuthPage.open(); 

        await AuthPage.signUp(email, password);

        await expect(browser).toHaveUrl("https://ui-automation-camp.vercel.app/products");
        await expect(AuthPage.btnSignOut).toBeDisplayed(); 

        await AuthPage.signOut(); 
    })

    it('should fail to create an account with no password', async () => { 

        const email = faker.internet.email();

        await AuthPage.open(); 

        await AuthPage.signUp(email, " ");

        await expect(AuthPage.errorMsg).toBeDisplayed();
    })
    
})