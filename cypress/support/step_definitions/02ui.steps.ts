import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'
import voiceAIAgentsPage from '../../pages/products/voiceAIAgents.page'
import inferencePage from '../../pages/products/inference.page'
import travelAndHospitalityPage from '../../pages/travelAndHospitality.page'
import voiceAIPage from '../../pages/pricing/voiceAI.page'

// TC-05
When('I navigate to the Voice AI Agents FAQ section', () => {
    header.getProductsBtn().should('be.visible').click()
    megaMenu.getVoiceAIAgentsLink().should('be.visible').click()
    cy.url().should('include', '/voice-ai-agents')

    voiceAIAgentsPage.getFAQSection().scrollIntoView()
    voiceAIAgentsPage.getFAQSection().should('be.visible')
})
When('I expand the "Which languages are supported?" question', () => {
    voiceAIAgentsPage.getLanguagesAccordion().should('be.visible').click()
})
Then('the answer is displayed', () => {
    voiceAIAgentsPage.getLanguagesAccordion().should('have.attr', 'aria-expanded', 'true')
})

When('I collapse the "Which languages are supported?" question', () => {
    voiceAIAgentsPage.getLanguagesAccordion().click()
})
Then('the answer is hidden', () => {
    voiceAIAgentsPage.getLanguagesAccordion().should('have.attr', 'aria-expanded', 'false')
})

// TC-06
When('I navigate to the AI Agent chat', () => {
    header.getProductsBtn().should('be.visible').click()
    megaMenu.getInferenceAPILink().should('be.visible').click()
    cy.url().should('include', '/inference')

    inferencePage.getChatTitle().scrollIntoView()
    inferencePage.getChatTitle().should('be.visible')
})
Then('the default AI Agent is selected', () => {
    inferencePage.getVoiceAgentButtons().first()
        .should('have.attr', 'aria-pressed', 'true')
})

When('I send "Hello" to the AI Agent', () => {
    inferencePage.getMessageInput().type("Hello")
    inferencePage.getSendMessageBtn().should('be.visible').click()
})
Then('my message is displayed in the chat', () => {
    inferencePage.getChatMessages()
        .eq(0)
        .should('be.visible')
        .and('contain.text', 'Hello')
})
Then('the AI Agent response is displayed', () => {
    inferencePage.getChatMessages()
        .eq(1)
        .should('be.visible')
        .and('not.be.empty')
})

// TC-07
When('I navigate to the Why Telnyx section on the Travel and Hospitality page', () => {
    header.getSolutionsBtn().click()
    megaMenu.getTravelAndHospitalityCategory().should('be.visible').click()
    cy.url().should('include', '/travel-and-hospitality')

    travelAndHospitalityPage.getWhyTelnyxSection().scrollIntoView()
    travelAndHospitalityPage.getWhyTelnyxSection().should('be.visible')
})

Then('the first tab is selected', () => {
    travelAndHospitalityPage.getWhyTelnyxTabs()
        .eq(0)
        .should('have.attr', 'data-state', 'active')
        .and('have.attr', 'aria-selected', 'true')
})

Then('its content is displayed', () => {
    travelAndHospitalityPage.getTabContentHeader()
        .eq(0)
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.wrap(text.trim()).as('firstTabContentHeader')
        })
})

When('I select the second tab', () => {
    travelAndHospitalityPage.getWhyTelnyxTabs()
        .eq(1)
        .click()
})

Then('the second tab content is displayed', () => {
    travelAndHospitalityPage.getTabContentHeader()
        .eq(1)
        .should('be.visible')
})

Then('it differs from the content of the first tab', () => {
    travelAndHospitalityPage.getTabContentHeader()
        .eq(1)
        .invoke('text')
        .then((secondTabHeader) => {
            cy.get('@firstTabContentHeader').then((firstTabContentHeader) => {
                expect(secondTabHeader.trim()).not.to.equal(firstTabContentHeader)
            })
        })
})

// TC-08
When('I navigate to the Voice AI cost calculator', () => {
    header.getPricingBtn().should('be.visible').click()
    megaMenu.getVoiceAICategory().should('be.visible').click()
    cy.url().should('include', '/voice-ai-agents')

    voiceAIPage.getEstimateSection().scrollIntoView()
    voiceAIPage.getEstimateSection().should('be.visible')
})
Then('the cost calculator is displayed', () => {
    voiceAIPage.getMinutesPerMonthInput().should('be.visible')
    voiceAIPage.getEstimatedCostText()
        .should('be.visible')
        .invoke('text')
        .then((text) => {
            cy.wrap(text.trim()).as('initialCost')
        })
})

When('I enter 450,000 minutes per month', () => {
    voiceAIPage.getMinutesPerMonthInput()
        .clear()
        .type('450,000')
})
Then('the estimated monthly cost is updated accordingly', () => {
    voiceAIPage.getEstimatedCostText()
        .should('contain.text', '450,000')
        .invoke('text')
        .then((updatedCost) => {
            cy.get('@initialCost').then((initialCost) => {
                expect(updatedCost.trim()).not.to.equal(initialCost)
            })
        })
})