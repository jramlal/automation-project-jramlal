const Page = require('./page');

class CheckoutPage extends Page {

    get fullname() {
        return $('[name="name"]');
    }

    get email() {
        return $('[name="email"]');
    }

    get streetAddress() {
        return $('[name="address1"]')
    }

    get apartment() {
        return $('[name="address2"]');
    }

    get city() {
        return $('[name="city"]');
    }

    get country() {
        return $('//label[text()="Country"]/following::div[6]/input');
    }

    get province() {
        return $('//label[text()="Province/State"]/following::div[6]/input');
    }

    get zcode() {
        return $('[name="postalCode"]');
    }

    get continueToPaymentBtn() {
        return $('.snipcart-base-button__label');
    }





    get paymentIframe() {
        return $('.snipcart-payment-card-form');
    }
    get cardNum() {
        return $('[name="card-number"]');
    }

    get cardExp() {
        return $('#expiry-date');
    }

    get cardCvv() {
        return $('#cvv');
    } 

    get placeOrderBtn() {
        return $('.snipcart-button-primary.snipcart-submit.snipcart-base-button.is-icon-right');
    }

   
   
   
    get orderConfTitle() { 
        return $('.snipcart__box--title div:nth-child(2) h1');
    }

    get invoiceNum() {
        return $('.snipcart-order__invoice-number');
    } 

    get exitOrderConfBtn() {
        return $('.snipcart-cart-header__close-button.snipcart-modal__close');
    }

    get editBtn() {
        return $('snipcart-button-link')
    }


    async checkoutInfo(fullname,email,streetAddress,apartment,city,country,province,zcode) {
        
        await this.fullname.setValue(fullname);
        await this.email.setValue(email);
        await this.streetAddress.setValue(streetAddress);
        await this.apartment.setValue(apartment);
        await this.city.setValue(city);
        await this.country.setValue(country); 
        await browser.keys("\uE007"); 
        await this.province.setValue(province);
        await browser.keys("\uE007"); 
        await this.zcode.setValue(zcode);

        await this.continueToPaymentBtn.click();
    }


    async paymentInfo(number,expiry,cvv) {
        await this.cardNum.setValue(number);
        await this.cardExp.setValue(expiry); 
        await this.cardCvv.setValue(cvv); 

        await this.placeOrderBtn.click();
    }

}

module.exports = new CheckoutPage();