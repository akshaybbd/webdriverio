const { Given, When, Then } = require('@wdio/cucumber-framework');
const { saveScreenshot } = require('webdriverio/build/commands/browser/saveScreenshot');

Given(/^I am on the Orange HRM Login page$/, async () => {
  await browser.url("https://opensource-demo.orangehrmlive.com/");
  await browser.pause(5000)
  await expect(browser).toHaveTitleContaining("OrangeHRM")
  await browser.saveScreenshot("Screenshots/orangehrm1.png")

});
When(/^User Enter ([^\”]*) and ([^\”]*)$/, async (uname, pass) => {
  await $('[name="txtUsername"]').setValue(uname)
  await browser.pause(3000)
  await $('[id="txtPassword"]').setValue(pass);
  await browser.pause(3000)
  await browser.saveScreenshot("Screenshots/orangehrm2.png")
});

Then(/^I should be able to login into HRM App$/, async () => {
  await $('[type="submit"]').click();
  await browser.saveScreenshot("Screenshots/orangehrm3.png")
});
