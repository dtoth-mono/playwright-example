const { expect } = require("@playwright/test");

exports.LandingPage = class LandingPage {
  constructor(page) {
    this.page = page;
    this.menuBanner = page.getByRole("banner").locator("div");
    this.menuBtn = this.menuBanner.getByText("Menu");
    this.menuLogo = this.menuBanner.getByRole("link", { name: "Menu" });
    this.searchBtn = page.getByRole("textbox", { name: "Search" });
    this.searchField = page.getByPlaceholder("Search...");
  }

  async searchFor(str) {
    await this.searchBtn.click();
    await this.searchField.waitFor({ state: "attached" });
    await this.searchField.fill(str);
    await this.page.keyboard.press("Enter");
    await this.page.waitForTimeout(2000);

    const url = this.page.url();
    await expect(url).toContain(`/search/${str}`);
  }

}