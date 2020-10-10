describe("E2E Test Altriks App", () => {
  it("can see nothing in the cart message", () => {
    cy.visit("/");
    cy.findByAltText(/empty cart spinning cog/i).should("exist");
  });

  it("can add item in the cart", () => {
    cy.findByTestId("BikeInCart").should("not.exist");
    cy.findByTestId("BikeAddToCartButton").click().click().click();
    cy.findByTestId("BikeInCart").should("exist");
  });

  it("can change currency", () => {
    cy.findByRole("button", { name: /.* usd/i }).click();

    cy.findByRole("button", { name: /.* eur/i }).click();
  });
});

console.log(cy);
