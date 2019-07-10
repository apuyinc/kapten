import { Then } from "cypress-cucumber-preprocessor/steps";


Then ('user is in {string} page', (url) => {
    cy.url().should('include', url);
})

Then('user cannot go back to {string} screen', (path) => {
    cy.go('back').then(() => {
        cy.location('pathname').should('not.include', path)
    })

})