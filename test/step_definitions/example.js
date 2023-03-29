const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");

let count = 0;

Given("I'm a user", () => {
  console.log("Starting test...");
});

When("I sum {int} and {int}", (a, b) => {
  count = a + b;
});

Then("The value is {int}", (value) => {
  expect(count).to.equal(value)  
});