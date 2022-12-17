

const Page = require('./page');

class CartPage extends Page {

    get fittedHatName() {
        return $('.snipcart-item-line__title.snipcart__font--xlarge')
    } 

    get fittedHatDesc() {
        return $('.snipcart__font--std.snipcart-item-description');
    }

    get fittedHatPrice() {
        return $('.snipcart-item-quantity__total-price.snipcart__font--bold')
    }

    get checkOutButton() {
        return $('.snipcart-button-primary')
    }

    get removeItemBtn() {
        return $('button[title="Remove item"]');
    }

    get cartQuantity(){
        return $('.snipcart__font--secondary.snipcart__font--regular')
    }

    get topRightQuantity() {
        return $('.snipcart-cart-header__option')
    }

    get openDetailedCart() {
        return $('.snipcart-button-link')
    }

    get exitCartBtn() {
        return $('.snipcart-cart-header__close-button.snipcart-modal__close')
    }

    get increaseQuantityBtn() {
        return $('[aria-label="Increment quantity"]');
    }

    get decreaseQuantityBtn() {
        return $('[aria-label="Decrement quantity"]');
    }

    get quantity() {
        return $('.snipcart__font--secondary.snipcart__font--regular');
    }

    get pillowPrice() {
        return $("//div[normalize-space()='$20.00']");
    }

    get hatPrice() {
        return $("//div[normalize-space()='$30.00']");
    }
    
    get totalPrice() {
        return $(".snipcart-summary-fees__amount.snipcart-summary-fees__amount--highlight.snipcart__font--large");
    }




    async increaseItemQuantity() {
        await this.increaseQuantityBtn.click();
    }

    async decreaseItemQuantity() {
        await this.decreaseQuantityBtn.click();
    }

    async removeFromCart() {
        await this.removeItemBtn.click();
    }



}

module.exports = new CartPage();