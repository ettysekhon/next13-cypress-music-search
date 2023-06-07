/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find input and enter search term and enter
    cy.get("input").type("drake{enter}");

    // The new url should include "/search"
    cy.url().should("include", "/search?term=drake");

    // The new page should contain music card images
    cy.get("[data-testid=music-card-list]")
      .find("img")
      .should("have.length", 10);

    cy.get("[data-testid=load-more]").click();

    cy.get("[data-testid=music-card-list]")
      .find("img")
      .should("have.length", 20);
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
