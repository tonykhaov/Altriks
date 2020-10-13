describe("E2E Test Altriks App", () => {
  it("can see nothing in the cart message and checkout should be disabled", () => {
    cy.visit("/");
    cy.findByAltText(/empty cart spinning cog/i).should("exist");
    cy.findByText(/checkout/i).should("be.disabled");
  });

  it("can add item in the cart", () => {
    cy.visit("/");
    cy.findByTestId("BikeInCart").should("not.exist");
    cy.findByTestId("BikeAddToCartButton").click().click().click();
    cy.findByTestId("BikeInCart").should("exist");
  });

  it("can add items and checkout", () => {
    cy.visit("/");
    cy.findByTestId("BikeInCart").should("not.exist");
    cy.findByTestId("BikeAddToCartButton").click().click().click();
    cy.findByTestId("BikeInCart").should("exist");

    cy.findByText(/checkout/i).click();
    cy.findByAltText(/empty cart spinning cog/i).should("exist");
  });

  it("can change currency", () => {
    cy.visit("/");
    cy.findByRole("button", { name: /.* usd/i }).click();
    cy.findByRole("button", { name: /.* eur/i }).click();
  });
});
