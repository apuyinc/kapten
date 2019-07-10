import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
})

const signin_url = 'https://welcome.kapten.com/signin'
Given('user navigates to sign in page', () => {
    cy.visit(signin_url)
})

When('user sign in with registered email and correct password', () => {
    cy.fixture('users.json').as('users');

    cy.get('@users').then((users) => {
        const user = users[0]
        cy.get('input#email-1').type(user.email);
        cy.get('input#password-2').type(user.password);
        cy.get('button[type="submit"]').click();

    })
})

When('user sign in with username {string} and password {string}', (email, password) => {
    cy.get('input#email-1').type(email);
    cy.get('input#password-2').type(password);
    cy.get('button[type="submit"]').click();

})

When('user sign out', () => {
    cy.get('a.disconnect').click();
})

Then('{string} message is shown', (errorMessage) => {
    cy.get('span.Message-sc-1k09yhi-1').should('contain', errorMessage);
});

Then('email field contains {string}', (emailAddressString) => {
    cy.get('input#email-1').should( (emailField) => {
        //regular assertions can be used
        expect(emailField).to.have.value(emailAddressString);
    })
});

Then('password field contains {string}', function (passwordSsring) {
    cy.get('input#password-2').should( (passField) => {
        //regular assertions can be used
        expect(passField).to.have.value('');
    })
});


