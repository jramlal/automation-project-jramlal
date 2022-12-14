

const AuthPage = require('../pageobjects/auth.page');
const ProductPage = require('../pageobjects/product.page');

describe('Sort Feature Test Scenarios', () => {
    it('should sort items (A-Z)', async () => {
        await AuthPage.open(); 
        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.sortContainer.selectByAttribute('value','aToZ');

        
        const products = 
        ['Quality Fitted Hat', 'Quality Trucker Hat', 'Quality Mousepad', 'Quality Mug',
        'Quality Pillow', 'Quality Hooded Sweatshirt', 'Quality Kids Tshirt', 'Quality Vneck',
        'Quality Pink Pants', 'Quality Cargo Pants', 'Quality Jeans Pants', 'Quality Blue Shoes',
        'Quality Stylish Shoes', 'Quality Heal Shoes', 'Red Couch', 'White Couch', ' Gray Couch', 
        'Mackbook Pro', 'Dell Laptop', 'HP Laptop'];

        products.sort();

        for (const item of products) {
            const elems = await browser.$$('.chakra-text.css-1n64n71');
            for (const elem of elems) {
                await expect(elem).toHaveText(item);
            }    
        } 

        // this says passing but throws several exceptions 
        // products.forEach(async item => { 
        //     const elems = await browser.$$('.chakra-text.css-1n64n71');
        //     for (const elem of elems) {
        //         await expect(elem).toHaveText(item);
        //     }
        // });

     
        await AuthPage.signOut();
        browser.deleteCookies();
    }) 


    it('should check if category works as expected', async () => {
        await AuthPage.open(); 
        await AuthPage.login('hansel@catfish.com', 'Password123!');
        
        await ProductPage.catergoryContainer.selectByAttribute('value','hat');

        
        const hats = ['Quality Fitted Hat', 'Quality Trucker Hat'];

        // needs iterator to loop through hat array and check against elements 
           
        await AuthPage.signOut();
        browser.deleteCookies();
    })
})     