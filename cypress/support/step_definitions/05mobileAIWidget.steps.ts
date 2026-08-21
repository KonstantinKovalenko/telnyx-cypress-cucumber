import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import aiWidget from '../../components/aiWidget'

// TC-15
Given('the Telnyx homepage is opened in a mobile viewport', () => {
    cy.visit('/')
})

When('the AI Assistant button is clicked', () => {
    aiWidget.getOpenWidgetBtn().should('be.visible').click()
})
Then('the AI Assistant chat is displayed', () => {
    aiWidget.getChatTitle().should('be.visible')
})
Then('the greeting message is displayed', () => {
    aiWidget.getWelcomeMessage()
        .should('be.visible')
        .and('not.be.empty')
})

When('"Good day" is entered into the chat input and the message is submitted', () => {
    aiWidget.getUserMessageInput().type('Good day')
    aiWidget.getSendToChatBtn().should('be.visible').click()
})
Then('the submitted "Good day" message is displayed in the chat', () => {
    aiWidget.getChatMessages()
        .eq(1)
        .should('be.visible')
        .and('contain.text', 'Good day')
})
Then('the AI Assistant response is displayed in the chat', () => {
    aiWidget.getChatMessages()
        .eq(2)
        .should('be.visible')
        .and('not.be.empty')
})