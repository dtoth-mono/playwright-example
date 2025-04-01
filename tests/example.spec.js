const { test, expect } = require("@playwright/test");
const { LandingPage } = require('../pageObjects/landingPage');

test("Search Test", async ({ page }) => {
  const landingPage = new LandingPage(page);

  await page.goto("http://demo.baasic.com/angular/starterkit-photo-gallery/main");
  await landingPage.searchFor("Test");
  await expect(page).toHaveURL(/.*search/);
  await page.waitForTimeout(10000);
});