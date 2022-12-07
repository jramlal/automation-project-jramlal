

const Page = require('./page');


class AuthPage extends Page {
     
    get inputEmail (){
        return $("[id='1-email']");
    }
 
    get inputPassword(){
        return $("[id='1-password']");
    }
 


    get btnSignUpOrRegister() {
         return $('#signInOrRegister');
    } 
 
    get btnSubmit() {
        return $("[id='1-submit']");
    } 

    get btnSwitchToSignUp() {
        return $("li [href='#']");
    } 

    get btnSignOut() {
        return $('#top-sign-out')
    }

     
    async login(email, password) {
        
        await this.btnSignUpOrRegister.click();

        await this.btnSubmit.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);

        await this.btnSubmit.click();
    
    } 

    async signUp(email, password) {
        
        await this.btnSignUpOrRegister.click();
        await this.btnSwitchToSignUp.click();
        
        await this.btnSubmit.waitForDisplayed();
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);

        await this.btnSubmit.click();
    
    }

 
    open () {
        return browser.url('https://ui-automation-camp.vercel.app/')
    }
 
}
 
module.exports = new AuthPage();