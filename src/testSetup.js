const { test: baseTest, expect } = require("@playwright/test");
const { Page } = require("./customPage");

const test = baseTest.extend({
  page: async ({ page }, use) => {
    const customPage = new Page(page);
    await use(customPage);
  },
});

module.exports = { test, expect };