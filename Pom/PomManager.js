const {LoginPage} = require('./LoginPage.js');
const {InventoryPage} = require('./InventoryPage.js');


class PomManager {
  
  
  
    constructor(page) {

    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.inventoryPage = new InventoryPage(this.page);

  }

  getLoginPage() {
    return this.loginPage;
  }

getInventoryPage(){

return this.inventoryPage;

}

}

module.exports = {PomManager};
