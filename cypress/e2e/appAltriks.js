describe("E2E Test Altriks App", () => {
  it("can change currency", () => {
    const user = cy;
    user
      .visit("/")
      .get(".sc-AxgMl > :nth-child(2)")
      .click()
      .get(".sc-AxgMl > :nth-child(1)")
      .click();
  });
});
