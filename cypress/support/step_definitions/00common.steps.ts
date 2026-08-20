import { Given } from '@badeball/cypress-cucumber-preprocessor'

Given('the Telnyx homepage is opened', () => {
    cy.visit('/')
})

Given('the Voice API page is opened', () => {
    cy.visit('https://telnyx.com/pricing/voice-api')
})

Given('the Inference API page is opened', () => {
    cy.visit('https://telnyx.com/products/inference')
})

Given('the Contact Us page is opened', () => {
    cy.visit('https://telnyx.com/contact-us')
})