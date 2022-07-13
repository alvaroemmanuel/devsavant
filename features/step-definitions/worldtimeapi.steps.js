const { Given, When, Then } = require('@wdio/cucumber-framework');
const unirest = require('unirest');
const { config } = require('../../wdio.conf');

let ip, response;

Given(/^I have the following IP: (.*)$/, async (address) => {
  ip = address
});

When(/^I call the API to get the IP's current time$/, async () => {
  response = await unirest.get(`${config.baseUrl}/ip/${ip}`)
});

Then(/^I should see an error with the following text: "(.*)"$/, async (message) => {
  expect(response.status).toEqual(404)
  expect(response.body.error).toEqual(message)
});
