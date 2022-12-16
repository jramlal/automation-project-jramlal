const Page = require('./page');

class ContactPage extends Page {

    get firstName(){
        return $('#firstName');
    }

    get lastName(){
        return $('#lastName');
    }

    get email(){
        return $('#email');
    }

    get subject(){
        return $('#subject');
    }

    get message(){
        return $('#message');
    }

    get sendMessageBtn(){
        return $('.chakra-button.css-vs0e4t');
    }

    get msgSentTitle() {
        return $('.chakra-alert__title.css-tidvy5')
    }
    
    get msgSentBody() {
        return $('.chakra-alert__desc.css-zycdy9')
    }

    get twitterBtn() {
        return $("[href='https://twitter.com/qualityworkscg'] button")
    }

    get twitterHandle() {
        return $("div[class='css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l'] div[class='css-1dbjc4n'] span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']")
    }

    get twitterFollowBtn(){
        return $("div[aria-label='Follow @qualityworkscg'] span[class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']")
    }

    get contactBanner() {
        return $(".chakra-heading.css-z59od");
    }

    async fillContactForm(firstName,lastName,email,subject,message){
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.email.setValue(email);
        await this.subject.setValue(subject);
        await this.message.setValue(message);
        await this.sendMessageBtn.click();

    }

    open () {
        return browser.url('https://ui-automation-camp.vercel.app/contact')
    }
}

module.exports = new ContactPage(); 