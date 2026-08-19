import { Given, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('the Telnyx homepage is opened', () => {
    cy.visit('/')
})

Then('the Telnyx homepage is displayed', () => {
    cy.url().should('eq', 'https://telnyx.com/')
})