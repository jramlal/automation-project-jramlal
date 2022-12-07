

const AuthPage = require('../pageobjects/auth.page')

describe('Authentication Test Scenarios', () => {
    it('should login with valid credentials', async () => {
        await AuthPage.open(); 

        await AuthPage.login('luffy@onepiece.com', 'Password123!');

        await expect(browser).toHaveUrl("https://ui-automation-camp.vercel.app/products")
        await expect(AuthPage.btnSignOut).toBeDisplayed()
    })
})


