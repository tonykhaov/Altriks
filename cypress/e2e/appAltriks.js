describe("E2E Test Altriks App", () => {
  it("can change currency", () => {
    cy.visit("/");

    cy.findByRole("button", { name: /.* usd/i }).click();

    cy.findByRole("button", { name: /.* eur/i }).click();
  });
});
