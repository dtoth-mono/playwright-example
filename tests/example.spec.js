const { test, expect } = require("../src/testSetup");
const { LandingPage } = require('../pageObjects/landingPage');
const { Gallery } = require("../pageObjects/gallery");

test.beforeEach("Go To", async ({ page }) => {
  await page.goto("http://demo.baasic.com/angular/starterkit-photo-gallery/main");
})

test("Search Test", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await landingPage.searchFor("Test");
  await expect(page.getByText("Test").first()).toBeVisible();
});

test("Gallery Test", async ({ page }) => {
  const gallery = new Gallery(page);

  await gallery.galleryBtn.click();
  await page.waitForTimeout(1500);
  await gallery.checkImg(1);
})