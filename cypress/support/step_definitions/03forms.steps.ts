import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'
import voiceAPIPage from '../../pages/pricing/voiceAPI.page'
import inferencePage from '../../pages/products/inference.page'

// TC-09
When('I navigate to the SIP Trunking pricing form from the Pricing menu', () => {
    header.getPricingBtn().click()
    megaMenu.getVoiceAPICategory().should('be.visible').click()
    cy.url().should('include', '/pricing/voice-api')

    voiceAPIPage.getDownloadPricingTitle().scrollIntoView()
})
When('I submit the form without entering any information', () => {
    voiceAPIPage.getSubmitBtn().should('be.visible').click()
})
Then('a required field validation message is displayed', () => {
    voiceAPIPage.getValidationMessage().should('be.visible')
})

// TC-10
When('I navigate to the SIP Trunking pricing form', () => {
    cy.url().should('include', '/pricing/voice-api')
    voiceAPIPage.getDownloadPricingTitle().scrollIntoView()
})
When('I submit the form with valid information', () => {
    cy.fixture('downloadPricing').then((data) => {
      voiceAPIPage.fillDownloadingForm(data.validUser)
    })

    voiceAPIPage.getSubmitBtn().should('be.visible').click()
})
Then('a confirmation message is displayed', () => {
    cy.contains('h1', 'Thank you!').should('be.visible')
})

// TC-11
When('I navigate to the AI Agent chat element', () => {
    cy.url().should('include', '/inference')
    inferencePage.getChatTitle().scrollIntoView()
    inferencePage.getChatTitle().should('be.visible')
})
When('I try to send an empty message', () => {
    inferencePage.getMessageInput().should('have.value', '')
    inferencePage.getSendMessageBtn().should('be.visible').click()
})
Then('a message validation error is displayed', () => {
    inferencePage.getValidationMessage().should('be.visible')
})