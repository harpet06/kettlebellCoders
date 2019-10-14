it("we can navigate the website", () => {
  cy.visit("/")
    .findByText("Take me to the gym")
    .click()
    .url()
    .should("include", "/workout");
});
