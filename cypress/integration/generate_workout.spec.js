it("we can navigate the website", () => {
  cy.visit("http://localhost:3000/workout")
    .get("#workoutType")
    .select("Both")
    .should("have.value", "both")
    .get("#workoutDifficulty")
    .select("Advanced")
    .should("have.value", "advanced")
    .get("#workoutNumber")
    .select("4")
    .should("have.value", "4")
    .get(".btn")
    .click()
    .get(".card-deck")
    .should("be.visible");
});
