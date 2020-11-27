/// <reference types="cypress" />

context("Books", () => {
  const getStore = () => cy.window().its("__store__");

  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  describe("Book search", () => {
    it("get correct books", () => {
      cy.get("input[name=bookSeach]").type("mockingbird");
      cy.get("button[type=submit]").click();
      cy.contains("mockingbird");
    });

    it("add books to reading list", () => {
      cy.get("input[name=bookSeach]").type("mockingbird");
      cy.get("button[type=submit]").click();

      cy.get(".bottom-section button")
        .first()
        .click();

      getStore()
        .its("state.userBooks")
        .should("have.length", 1);
    });
  });
});
