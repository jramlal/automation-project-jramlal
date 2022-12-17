const AuthPage = require('../pageobjects/auth.page');
const ProductPage = require('../pageobjects/product.page');
const ProductDetailsPage = require('../pageobjects/product-details.page');
const FavoritesPage = require('../pageobjects/wishlist.page');

describe('Wishlist/Favourites Test Scenarios', () => {

    it('Should verify that the Favorites button works', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductPage.favoritesBtn.click();
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/favorites');     
        await expect(ProductPage.contactBtn).toBeDisplayed();
        await expect(ProductPage.aboutBtn).toBeDisplayed();
        await expect(FavoritesPage.favoritesHeading).toHaveText('Favorites');

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('Should add Quality Fitted Hat to favourites', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductDetailsPage.open()
        await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-hat-model');     
        await FavoritesPage.addToFavorites();
        await expect(FavoritesPage.favNum).toHaveTextContaining('1');

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it('Should remove Quality Fitted Hat to favourites', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductDetailsPage.open()
        // await expect(browser).toHaveUrl('https://ui-automation-camp.vercel.app/products/quality-hat-model');
        await FavoritesPage.addToFavorites();
        await expect(FavoritesPage.favNum).toHaveTextContaining('1');
        await FavoritesPage.open()
        await FavoritesPage.removeFav();
        await expect(FavoritesPage.favNum).toHaveTextContaining('0');

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it.only('Should verify that the star on the item is yellow', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductDetailsPage.open() 
        await FavoritesPage.addToFavorites();
        await expect(FavoritesPage.favNum).toHaveTextContaining('1');
        await FavoritesPage.open()
        await expect(FavoritesPage.removeBtn()).toHaveAttributeContaining("color: rgb(241, 196, 15);")

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 

    it.skip('Clicking favourite twice should not add item to cart', async () => {
        await AuthPage.open(); 

        await AuthPage.login('hansel@catfish.com', 'Password123!');

        await ProductDetailsPage.open()
        await FavoritesPage.addToFavorites();
        await ProductDetailsPage.open()
        await FavoritesPage.addToFavorites();
        
        // await FavoritesPage.removeFav();
        await expect(FavoritesPage.favNum).toHaveTextContaining('0');

        await AuthPage.signOut();
        browser.deleteCookies();
    }) 
})    