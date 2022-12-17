const Page = require('./page');


class ProductDetailsPage extends Page {
     
    get addToCartBtn (){
        return $('#add-to-cart');
    }

    get increaseQuantityBtn() {
        return $('#product-increase');
    }

    get decreaseQuantityBtn() {
        return $('#product-decrease');
    } 

    get checkOutBtn() {
        return $("button[class='snipcart-button-primary snipcart-base-button is-icon-right']");
    }

    get quantity() {
        return $('.chakra-numberinput__field.css-a8qclj')
    }

    get cartQuantity() {
        return $('.snipcart-item-quantity span')
    }

    get emptyCartMsg() {
        return $('.snipcart-empty-cart h1')
    }

    get cartQuantityField() {
        return $("input[role='spinbutton']")
    } 

    get openCartBtn() {
        return $('#top-cart')
    }

    get openCartBtnText() {
        return $('#top-cart span')
    }

    get exitCartBtn() {
        return $('.snipcart-cart-header__close-button.snipcart-modal__close')
    }


    get productTitle() {
        return $("div[class='chakra-stack css-84zodg'] h2[class='chakra-heading css-1dklj6k']")
    }


    async addToCart() {
        await this.addToCartBtn.click();
    }

    async increaseQuantity() {
        await this.increaseQuantityBtn.click();
    }

    async decreaseQuantity() {
        await this.decreaseQuantityBtn.click();
    } 

    open () {
        return browser.url('https://ui-automation-camp.vercel.app/products/quality-hat-model');
    } 
    
}
 
module.exports = new ProductDetailsPage();