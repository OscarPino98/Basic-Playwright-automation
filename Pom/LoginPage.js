
class LoginPage {

// https://www.saucedemo.com/

// user: standard_user
//pass: secret_sauce

constructor(page){

this.page = page;

this.usernameField = page.locator('[data-test="username"]');
this.passwordField = page.locator('[data-test="password"]');

this.botonLogin = page.locator('[data-test="login-button"]');




};



async goTo(){

await this.page.goto('https://www.saucedemo.com/');


}


async dologin(username, password){


await this.usernameField.type(username);
await this.passwordField.type(password);
await this.botonLogin.click();


}



}

module.exports = {LoginPage};
