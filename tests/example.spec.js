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
});

test("API Test", async ({ request }, testInfo) => {
  const pokemonName = "pikachu"
  const response = await request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body).toHaveProperty("id", 25);
  expect(body).toHaveProperty("name", `${pokemonName}`);

  const resultData = {
    id: body.id,
    name: body.name,
    abilities: body.abilities
  }
  testInfo.attach("Pokemon Info", {
    body: JSON.stringify(resultData, null, 2),
    contentType: "application/json"
  })

})