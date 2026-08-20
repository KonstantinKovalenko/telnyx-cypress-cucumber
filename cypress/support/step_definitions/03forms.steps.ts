import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'
import voiceAPIPage from '../../pages/pricing/voiceAPI.page'
import inferencePage from '../../pages/products/inference.page'


// TC-09
When('the Voice API page is opened from the Pricing mega menu', () => {
    header.getPricingBtn().click()
    megaMenu.getVoiceAPICategory().should('be.visible').click()
    cy.url().should('include', '/pricing/voice-api')
})
When('the Download SIP Trunking Pricing form is scrolled into view', () => {
    voiceAPIPage.getDownloadPricingTitle().scrollIntoView()
})
When('the Submit Button is clicked', () => {
    voiceAPIPage.getSubmitBtn().should('be.visible').click()
})
Then('the "This field is required" validation message is displayed', () => {
    voiceAPIPage.getValidationMessage().should('be.visible')
})

// TC-10
When('the Download SIP Trunking pricing form is scrolled into view', () => {
    cy.url().should('include', '/pricing/voice-api')
    voiceAPIPage.getDownloadPricingTitle().scrollIntoView()
})
When('all mandatory fields are filled with valid data', () => {
    cy.fixture('downloadPricing').then((data) => {
      voiceAPIPage.fillDownloadingForm(data.validUser)
    })
})
When('the Submit button is clicked', () => {
    voiceAPIPage.getSubmitBtn().should('be.visible').click()
})
Then('the confirmation message is displayed on the new page', () => {
    cy.contains('h1', 'Thank you!').should('be.visible')
})

// TC-11
When('the CHAT TO AN AGENT page element is scrolled into view', () => {
    cy.url().should('include', '/inference')
    inferencePage.getChatTitle().scrollIntoView()
    inferencePage.getChatTitle().should('be.visible')
})
When('the chat message input is left empty', () => {
    inferencePage.getMessageInput().should('have.value', '')
})
When('the SEND MESSAGE button is clicked', () => {
    inferencePage.getSendMessageBtn().should('be.visible').click()
})
Then('the "Please enter a message" validation message is displayed', () => {
    inferencePage.getValidationMessage().should('be.visible')
})