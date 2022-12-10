

const Page = require('./page');

class CartPage extends Page {

    get checkOutButton() {
        return $('.snipcart-button-primary')
    }

    get removeItemBtn() {
        return $('button[title="Remove item"]');
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