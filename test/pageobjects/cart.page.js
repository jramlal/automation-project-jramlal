

const Page = require('./page');

class CartPage extends Page {

    get checkOutButton() {
        return $('.snipcart-button-primary')
    }

    get removeItemBtn() {
        return $('button[title="Remove item"]')
    }

    async removeFromCart() {
        await this.removeItemBtn.click();
    }

}

module.exports = new CartPage();