// @ts-check
const { test, expect } = require('@playwright/test');
const {PomManager} = require('../Pom/PomManager.js');

const dataset = require("../Utils/Data.json");
for(const data of dataset)

test.only('Nuevotest', async ({ page }) => {
    
const poManager = new PomManager(page);
const loginpage = poManager.getLoginPage();

await loginpage.goTo();

await loginpage.dologin(data.usernameStandar, data.password);

await page.waitForTimeout(3000);

});
