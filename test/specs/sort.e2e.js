

const AuthPage = require('../pageobjects/auth.page');
const ProductPage = require('../pageobjects/product.page');
const productsData = require('../data/products')

describe('Sort Feature Test Scenarios', () => {
    it('should sort items (A-Z)', async () => {
        await AuthPage.open(); 
        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.selectSort(productsData.sort['A to Z']);

        productsData.products.sort();

        const elems = await browser.$$('.chakra-text.css-1n64n71'); 
        
        elems.forEach(async (elem, index)  =>{
            await expect(elem).toHaveText(productsData.products[index].name);
            await expect(elem).toBeDisplayed();
        })
     
        await AuthPage.signOut();
        browser.deleteCookies();
    }) 


    it('should check if the category works as expected', async () => {
        await AuthPage.open(); 
        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.selectCategory(productsData.category['Hats']);

        const elems = await browser.$$('.chakra-text.css-1n64n71');

        elems.forEach(async (elem, index)  =>{
            await expect(elem).toHaveText(productsData.hats[index].name);
            await expect(elem).toBeDisplayed();
        }) 
           
        await AuthPage.signOut();
        browser.deleteCookies();
    })

    it('should test the reset button', async () => {
        await AuthPage.open(); 
        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.selectCategory(productsData.category['Hats']);

        const elems = await browser.$$('.chakra-text.css-1n64n71');

        elems.forEach(async (elem, index)  =>{
            await expect(elem).toHaveText(productsData.hats[index].name);
            await expect(elem).toBeDisplayed();
        }) 

        await ProductPage.resetBtn.click();
         
        
        elems.forEach(async (elem, index)  =>{
            await expect(elem).toHaveText(productsData.products[index].name);
            await expect(elem).toBeDisplayed();
        })
     
        await AuthPage.signOut();
        browser.deleteCookies();
    })

})     