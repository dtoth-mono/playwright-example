const { expect } = require("playwright/test");
const { LandingPage } = require("./landingPage");

exports.Gallery = class Gallery extends LandingPage {
  constructor(page) {
    super(page);
    this.gallerySection = page.locator("baasic-photo-list");
  }

  async checkImg(imageNum) {
    const image = this.gallerySection.locator("div .thumbnail__img").nth(imageNum);
    await this.page.keyboard.press("PageDown");
    await image.hover()
    await expect(image).toBeVisible();
  }
}