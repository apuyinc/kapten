import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
})


const signin_url = 'https://welcome.kapten.com/signin'
Given('user navigates to sign in page', () => {
    cy.visit(signin_url)
})

When('user sign in with username {string} and password {string}', (email, password) => {
    cy.get('input#email-1').type(email);
    cy.get('input#password-2').type(password);
    cy.get('button[type="submit"]').click();
})

When('user sign out', () => {
    cy.get('a.disconnect').click();
})



