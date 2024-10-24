describe("form", () => {
  const name = "David";

  beforeEach(() => {
    cy.visit("http://localhost:3000");

    cy.wait(300);

    cy.get('[data-cy="user-form"]').should("be.visible");
  });

  it("It should display all users", () => {
    cy.get('[data-cy="all-users-btn"]').should("exist").click();

    cy.url().should("include", `/users`);
  });

  it("It should display a error message if no user is given", () => {
    cy.get('[data-cy="submit-btn"]').should("exist").click();

    cy.get('[data-cy="form-error-message"]').should("exist");
  });

  it("It should navigate to user page", () => {
    cy.get('[data-cy="form-input"]').should("exist").type(name);

    cy.get('[data-cy="submit-btn"]').should("exist").click();

    cy.url().should("include", `/users/${name}`);
  });

  it("It should show error if user exists", () => {
    cy.get('[data-cy="form-input"]').should("exist").type(name);

    cy.get('[data-cy="submit-btn"]').should("exist").click();

    cy.url().should("include", `/users/${name}`);

    cy.visit("http://localhost:3000");

    cy.wait(300);

    cy.get('[data-cy="form-input"]').should("exist").type(name);

    cy.get('[data-cy="submit-btn"]').should("exist").click();

    cy.get('[data-cy="error-message"]').should("exist");
  });

  it("It should change user status", () => {
    cy.get('[data-cy="form-input"]').should("exist").type(name);

    cy.get('[data-cy="submit-btn"]').should("exist").click();

    cy.url().should("include", `/users/${name}`);

    cy.get('[data-cy="status-switch"]').should("exist").click();

    cy.get('[data-cy="status-text"]').should("have.text", "Present");
  });
});
