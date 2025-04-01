const { time } = require("console");

class Page {
  constructor(page) {
    this.page = page;

    return new Proxy(this, {
      get(target, prop) {
        return prop in target ? target[prop] : target.page[prop];
      },
    });
  }

  async waitForLoader(timeoutSeconds = 60) {
    const timeout = (timeoutSeconds - 2) * 1000;
    const loaderSpinner = this.page.locator('baasic-photo-list div').nth(3);
    await this.page.waitForTimeout(2000);
    await loaderSpinner.waitFor({ state: "hidden", timeout: timeout }).catch(() => { });
  }
}

module.exports = { Page };