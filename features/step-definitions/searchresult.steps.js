const { Given, When, Then } = require('@wdio/cucumber-framework');

const GoogleSearchPage = require('../pageobjects/googlesearch.page');

Given(/^I'm a (.*) user$/, async (site) => {
  await GoogleSearchPage.visit(site);
});

When(/^I type (\w+) in the search box and click on the "I'm Feeling Lucky" button$/, async (keyword) => {
  await GoogleSearchPage.feelingLuckySearch(keyword);
});

Then(/^I should be taken directly to the most relevant result$/, async () => {
  await browser.pause(1000)
  expect(browser).toHaveUrlContaining('devsavant')
  await browser.saveScreenshot('./screenshots/devsavant.png')
});
