class InventoryPage {

    // https://www.saucedemo.com/
    
    // user: standard_user
    //pass: secret_sauce
    
    constructor(page){
    
   this.page = page;
    
    this.buttonShoppingCart = page.locator('#shopping_cart_container a');

    this.buttonMenu = page.getByRole('button', { name: 'Open Menu' });
    
    this.buttonAllItems = page.getByRole('link', { name: 'All Items' });

    
    };
    
    
    }
    module.exports = {InventoryPage};