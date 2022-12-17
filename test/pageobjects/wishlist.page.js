const Page = require('./page');


class FavoritesPage extends Page{

    get favoritesHeading() {
        return $('.chakra-heading.css-11cq7yk');
    }

    get qualityFittedImg() {
        return $(".chakra-image.css-2i84d9[src='/images/quality-hat-model.jpg']");
    }

    get addToFav() {
        return $('#add-to-favorite');
    }

    get successMsg() {
        return $('#toast-11-title')
    }

    get removeBtn() {
        return $('#remove-favorite-btn')
    }

    get favNum() {
        return $("button[id='top-favorite'] p[class='chakra-text css-0']")
    }



    async addToFavorites() {
        await this.addToFav.click();
    }

    async productDetailsPage() {
        await this.fittedHatImg.click();
    }

    async removeFav() {
        await this.removeBtn.click();
    }

    open () {
        return browser.url('https://ui-automation-camp.vercel.app/favorites')
    }

}

module.exports = new FavoritesPage();