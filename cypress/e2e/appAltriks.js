describe("E2E Test Altriks App", () => {
  it("can change currency", () => {
    cy.visit("/");
    cy.findByRole("button", { name: /.* usd/i }).click();

    cy.findByRole("button", { name: /.* eur/i }).click();
  });

  it("can add item in the cart", () => {
    cy.findByTestId("BikeInCart").should("not.exist");
    cy.findByTestId("BikeAddToCartButton").click().click().click();
    cy.findByTestId("BikeInCart").should("exist");
  });
});

console.log(cy);
