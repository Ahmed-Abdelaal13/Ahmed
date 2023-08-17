class LoginPage {

    constructor (page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userName = page.locator("#userEmail");
        this.passWord = page.locator("#userPassword");
    }

    async goTo()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(username,password)
    {
        await this.userName.type(username);
        await this.passWord.type(password);
        await this.signInbutton.click();
    }
}

module.exports = {LoginPage};