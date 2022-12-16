const AuthPage = require('../pageobjects/auth.page');
const ContactPage = require('../pageobjects/contact.page');
const { faker } = require('@faker-js/faker');


describe('Contact Test Scenarios', () => {
    it('should fill out contact form and submit', async () => {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName,lastName,'gmail.com');
        const subject = 'I have not received my package';
        const message = "It's been three weeks since my order has been shipped and I still have not received my package!!!";
        
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ContactPage.open();

        await ContactPage.fillContactForm(firstName,lastName,email,subject,message);
        await expect(ContactPage.msgSentTitle).toHaveText('Message Sent!');
        await expect(ContactPage.msgSentBody).toHaveText('Your message has been sent!');

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('should fail when filling out contact form with incorrect email', async () => {

        const firstName = faker.name.firstName();
        const lastName = faker.name.lastName();
        const email = faker.internet.email(firstName,lastName,'@gmail.com');
        const subject = 'I have not received my package';
        const message = "It's been three weeks since my order has been shipped and I still have not received my package!!!";
        
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ContactPage.open();

        await ContactPage.fillContactForm(firstName,lastName,email,subject,message);
        await expect(ContactPage.msgSentTitle).not.toBeDisplayed();
        await expect(ContactPage.msgSentBody).not.toBeDisplayed();

        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should click twitter icon and open the twitter page', async () => {

        
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ContactPage.open();
        await ContactPage.twitterBtn.click();
        await browser.switchWindow('https://twitter.com/qualityworkscg');
        await expect(browser).toHaveUrl('https://twitter.com/qualityworkscg');
        await expect(ContactPage.twitterHandle).toHaveText('@qualityworkscg');
        await expect(ContactPage.twitterFollowBtn).toBeDisplayed();

        
        browser.deleteCookies();
    })
})
