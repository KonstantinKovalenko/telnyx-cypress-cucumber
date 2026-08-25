import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('I am an unregistered user on the Telnyx homepage', () => {
    cy.visit('/')
})

Given('I am an unregistered user on the Voice API page', () => {
    cy.visit('/pricing/voice-api')
})

Given('I am an unregistered user on the Inference API page', () => {
    cy.visit('/products/inference')
})

Given('I am an unregistered user on the Contact Us page', () => {
    cy.visit('/contact-us')
})

Given('cookies are accepted', () => {
    cy.acceptCookies()
})