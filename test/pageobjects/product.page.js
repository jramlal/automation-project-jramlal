

const Page = require('./page'); 


class ProductPage extends Page{

    get openCartBtn() {
        return $('#top-cart')
    }

    get fittedHat() {
        return $('[data-item-id="quality-hat-model"]')
    } 

    get pillow() {
        return $('[data-item-name="Quality Pillow"]')
    }

    get exitCart() {
        return $('button [title="Remove item"]')
    }

    get aboutBtn() {
        return $('#top-about')
    }

    get contactBtn() {
        return $('#top-contact')
    }

    async openCart() {
        await this.openCartBtn.click(); 
    }

    async addToCart() {
        await this.fittedHat.click();
    }  
    

    async addToCartMultiple() {
        await this.fittedHat.click();
        await this.exitCart.click();
        await this.pillow.click();
    } 
}

module.exports = new ProductPage();