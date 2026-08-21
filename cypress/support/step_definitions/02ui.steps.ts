import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'
import voiceAIAgentsPage from '../../pages/products/voiceAIAgents.page'
import inferencePage from '../../pages/products/inference.page'
import travelAndHospitalityPage from '../../pages/travelAndHospitality.page'
import voiceAIPage from '../../pages/pricing/voiceAI.page'

let firstTabContentHeader: string

// TC-05
When('the Voice AI Agents page is opened from the Products mega menu', () => {
    header.getProductsBtn().should('be.visible').click()
    megaMenu.getVoiceAIAgentsLink().should('be.visible').click()
    cy.url().should('include', '/voice-ai-agents')
})
When('the FAQ section is scrolled into view', () => {
    voiceAIAgentsPage.getFAQSection().scrollIntoView()
})
Then('the FAQ section is displayed', () => {
    voiceAIAgentsPage.getFAQSection().should('be.visible')
})

When('the "Which languages are supported?" accordion item is clicked', () => {
    voiceAIAgentsPage.getLanguagesAccordion().should('be.visible').click()
})
Then('the accordion item is expanded', () => {
    voiceAIAgentsPage.getLanguagesAccordion().should('have.attr', 'aria-expanded', 'true')
})

When('the "Which languages are supported?" accordion item is clicked again', () => {
    voiceAIAgentsPage.getLanguagesAccordion().click()
})
Then('the accordion item is collapsed', () => {
    voiceAIAgentsPage.getLanguagesAccordion().should('have.attr', 'aria-expanded', 'false')
})

// TC-06
When('the Inference API page is opened from the Products mega menu', () => {
    header.getProductsBtn().should('be.visible').click()
    megaMenu.getInferenceAPILink().should('be.visible').click()
    cy.url().should('include', '/inference')
})
When('the CHAT TO AN AGENT element is scrolled into view', () => {
    inferencePage.getChatTitle().scrollIntoView()
    inferencePage.getChatTitle().should('be.visible')
})
Then('the first AI Agent is selected by default', () => {
    inferencePage.getVoiceAgentButtons().first()
        .should('have.attr', 'aria-pressed', 'true')
})

When('the "Hello" message is sent to the AI Agent', () => {
    inferencePage.getMessageInput().type("Hello")
    inferencePage.getSendMessageBtn().should('be.visible').click()
})
Then('the "Hello" message is displayed in the chat', () => {
    inferencePage.getUserMessages().last()
        .should('be.visible')
        .should('contain.text', 'Hello')
})
Then('the AI-generated answer is displayed in the chat', () => {
    inferencePage.getAIMessages().last()
        .should('be.visible')
        .and('not.be.empty')
})

// TC-07
When('the Travel and Hospitality page is opened from the Solutions mega menu', () => {
    header.getSolutionsBtn().click()
    megaMenu.getTravelAndHospitalityCategory().should('be.visible').click()
    cy.url().should('include', '/travel-and-hospitality')
})
When('the WHY TELNYX? section is scrolled into view', () => {
    travelAndHospitalityPage.getWhyTelnyxSection().scrollIntoView()
    travelAndHospitalityPage.getWhyTelnyxSection().should('be.visible')
})
Then('the first tab is selected by default', () => {
    travelAndHospitalityPage.getWhyTelnyxTabs()
        .eq(0)
        .should('have.attr', 'data-state', 'active')
        .and('have.attr', 'aria-selected', 'true')
})
Then('the first tab content is displayed', () => {
    travelAndHospitalityPage.getTabContentHeader()
        .eq(0)
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            firstTabContentHeader = text.trim()
        })
})

When('the second tab is clicked', () => {
    travelAndHospitalityPage.getWhyTelnyxTabs()
        .eq(1)
        .click()
})
Then('the second tab is selected', () => {
    travelAndHospitalityPage.getWhyTelnyxTabs()
        .eq(1)
        .should('have.attr', 'data-state', 'active')
        .and('have.attr', 'aria-selected', 'true')
})
Then('the content associated with the second tab is displayed and differs from the previously displayed content', () => {
    travelAndHospitalityPage.getTabContentHeader()
        .eq(1)
        .should('be.visible')
        .invoke('text')
        .then((secondTabText) => {
            expect(secondTabText.trim()).not.to.equal(firstTabContentHeader)
        })
})

// TC-08
When('the Voice AI pricing page is opened from the Pricing mega menu', () => {
    header.getPricingBtn().should('be.visible').click()
    megaMenu.getVoiceAICategory().should('be.visible').click()
    cy.url().should('include', '/voice-ai-agents')
})
When('the ESTIMATE YOUR COST section is scrolled into view', () => {
    voiceAIPage.getEstimateSection().scrollIntoView()
    voiceAIPage.getEstimateSection().should('be.visible')
})
Then('the Minutes per month input is displayed', () => {
    voiceAIPage.getMinutesPerMonthInput().should('be.visible')
})
Then('the Estimated cost per minute text is displayed', () => {
    voiceAIPage.getEstimatedCostText().should('be.visible')

})

When('"450,000" is entered into the Minutes per month input', () => {
    voiceAIPage.getMinutesPerMonthInput()
        .clear()
        .type('450,000')
})
Then('the Estimated cost per month text is changed accordingly', () => {
    voiceAIPage.getEstimatedCostText().should('contain.text', '450,000')
})