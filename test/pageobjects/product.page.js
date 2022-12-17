

const Page = require('./page'); 


class ProductPage extends Page{

    get openCartBtn() {
        return $('#top-cart')
    }

    get fittedHat() {
        return $('[data-item-id="quality-hat-model"]')
    } 

    get fittedHatImg() {
        return $('[src="/images/quality-hat-model.jpg"]')
    }

    get fittedHatTitle() {
        return $('.chakra-text.css-1n64n71')
    } 

    get fittedHatPrice() {
        return $('.chakra-text.css-0')
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

    get sortContainer() {
        return $('#sort') 
    } 

    get searchField() {
        return $('#search')
    }

    get categoryContainer() {
        return $('#category')
    } 

    get resetBtn() {
        return $('#reset')
    }

    get cartQuantityField() {
        return $("div[id='product-0'] input[aria-valuemax='20']")
    }

    get favoritesBtn() {
        return $('#top-favorite')
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

    async search(item) {
        await this.searchField.setValue(item)
    }

    async selectSort(sort) {
        await this.sortContainer.selectByAttribute('value', sort)
    }

    async selectCategory(category) {
        await this.categoryContainer.selectByAttribute('value', category)
    }
}

module.exports = new ProductPage();