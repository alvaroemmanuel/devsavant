const { Given, When, Then } = require('@wdio/cucumber-framework');
const unirest = require('unirest');
const { config } = require('../../wdio.conf');

let response, status, timezones = [];

Given(/^I get the timezone list$/, async () => {
  response = await unirest.get(`${config.baseUrl}/timezone`)
  timezones = response.body;
});

When(/^I get the time for timezone number (\d+) from the list$/, async (index) => {
  response = await unirest.get(`${config.baseUrl}/timezone/${timezones[index - 1]}`)
  status = response.status
  utcTime = response.body.utc_datetime
});

Then(/^I should get a successful response$/, async () => {
  expect(status).toEqual(200)
  expect(utcTime).toMatch(/\d{4}-[0-1]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-6]\d.\d{6}\+00:00/)
});
