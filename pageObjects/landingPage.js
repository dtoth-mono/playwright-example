
exports.LandingPage = class LandingPage {
  constructor(page) {
    this.page = page;
    this.menuBanner = page.getByRole("banner").locator("div");
    this.menuBtn = this.menuBanner.getByText("Menu");
    this.menuLogo = this.menuBanner.getByRole("link", { name: "Menu" });
    this.searchBtn = page.getByRole("textbox", { name: "Search" });
  }
}