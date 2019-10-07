it("we can navigate the website", () => {
  cy.visit("http://localhost:3000/")
    .findByText("Take me to the gym")
    .click()
    .url()
    .should("include", "/workout");
});
