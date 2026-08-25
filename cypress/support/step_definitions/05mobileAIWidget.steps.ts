import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import aiWidget from '../../components/aiWidget'

// TC-15
Given('I am an unregistered user on the Telnyx homepage in a mobile viewport', () => {
    cy.visit('/')
})

When('I open the AI Assistant', () => {
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

When('I send "Good day" to the AI Assistant', () => {
    aiWidget.getUserMessageInput().type('Good day')
    aiWidget.getSendToChatBtn().should('be.visible').click()
})
Then('my message is displayed in the AI Assistant chat', () => {
    aiWidget.getChatMessages()
        .eq(1)
        .should('be.visible')
        .and('contain.text', 'Good day')
})
Then('the AI Assistant response is displayed', () => {
    aiWidget.getChatMessages()
        .eq(2)
        .should('be.visible')
        .and('not.be.empty')
})