import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'
import contactUsPage from '../../pages/contactUs.page'
import dsaContactPage from '../../pages/dsaContact.page'
import integrationsPage from '../../pages/integrations.page'

// TC-12
When('I open the Why Telnyx mega menu', () => {
    header.getWhyTelnyxBtn().should('be.visible').click()
})
Then('the expected categories are displayed', () => {
    megaMenu.getOurNetworkCategory().should('be.visible')
    megaMenu.getGlobalCommunicationsCategory().should('be.visible')
    megaMenu.getEdgeComputeCategory().should('be.visible')
    megaMenu.getAgentsPlatformCategory().should('be.visible')
})

// TC-13
When('I navigate to the DSA Compliance Contact page', () => {
    cy.url().should('include', '/contact-us')
    contactUsPage.getDSAContactSection().scrollIntoView()
    contactUsPage.getDSAContactSection().should('be.visible')
    contactUsPage.getDSAContactLink().should('be.visible').click()
    cy.url().should('include', '/digital-services-act-point-of-contact')

})
Then('the DSA Compliance Contact information is displayed', () => {
    dsaContactPage.getTitle().should('be.visible')
    dsaContactPage.getEmail()
        .should('be.visible')
        .and('contain.text', 'regulatory@telnyx.com')

})

// TC-14
When('I navigate to the Integrations section', () => {
    header.getDevelopersBtn().should('be.visible').click()
    megaMenu.getIntegrationsCategory().should('be.visible').click()
    cy.url().should('include', '/integrations')

    integrationsPage.getIntegrationsSection().scrollIntoView()
    integrationsPage.getIntegrationsSection().should('be.visible')
})
Then('the Calendly, Jira, and OneDrive integrations are displayed', () => {
    integrationsPage.getIntegration('Calendly')
        .scrollIntoView()
        .should('be.visible')

    integrationsPage.getIntegration('Jira')
        .scrollIntoView()
        .should('be.visible')

    integrationsPage.getIntegration('OneDrive')
        .scrollIntoView()
        .should('be.visible')
})