import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('the Telnyx homepage is opened', () => {
    cy.visit('/')
})