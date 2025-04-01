const { test, expect } = require("../src/testSetup");
const { LandingPage } = require('../pageObjects/landingPage');

test("Search Test", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await page.goto("http://demo.baasic.com/angular/starterkit-photo-gallery/main");
  await landingPage.searchFor("Test");
  await expect(page.getByText("Test").first()).toBeVisible();
});