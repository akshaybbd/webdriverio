const { Given, When, Then } = require('@wdio/cucumber-framework');
const { saveScreenshot } = require('webdriverio/build/commands/browser/saveScreenshot');
const actitimetestPage = require('../pageobjects/actitimetestPage');

const obj = new actitimetestPage()
Given(/^I am on the actitime landing page$/, async () => {
  await browser.url("https://timetracker.ctepl.com/actitime/login.jsp");
  await browser.pause(5000)
  await expect(browser).toHaveTitleContaining("actiTIME")
  await browser.saveScreenshot("Screenshots/acti1.png")
});

When(/^I Enter (\w+) and (.+)$/, async (uname, pass) => {
  await obj.getUsername().setValue(uname)
  await browser.pause(3000)
  await obj.getPwd().setValue(pass);
  await browser.pause(3000)
  await browser.saveScreenshot("Screenshots/acti2.png")

});

Then(/^I should be able to login actiTime application$/, async () => {
  await obj.getClick().click();
  await browser.pause(5000)
  const myInput = await $('[class="errormsg"]')
  await expect(myInput).toHaveText('Username or Password is invalid. Please try again.')
  await $('[class="errormsg"]').getText().then(function (emsg) {
    if (emsg === 'Username or Password is invalid. Please try again.') {
      console.log('String validation using if condition is successfull!')
    }
  })
  await browser.saveScreenshot("Screenshots/acti3.png")

});

