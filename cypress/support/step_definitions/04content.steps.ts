import { When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'
import contactUsPage from '../../pages/contactUs.page'
import dsaContactPage from '../../pages/dsaContact.page'
import integrationsPage from '../../pages/integrations.page'



// TC-12
When('the Why Telnyx header button is clicked', () => {
    header.getWhyTelnyxBtn().should('be.visible').click()
})
Then('the expected categories are displayed in the Why Telnyx mega menu', () => {
    megaMenu.getOurNetworkCategory().should('be.visible')
    megaMenu.getGlobalCommunicationsCategory().should('be.visible')
    megaMenu.getEdgeComputeCategory().should('be.visible')
    megaMenu.getAgentsPlatwormCategory().should('be.visible')
})

// TC-13
When('the DSA Contact page is opened from the DSA Compliance Contact section', () => {
    cy.url().should('include', '/contact-us')
    contactUsPage.getDSAContactSection().scrollIntoView()
    contactUsPage.getDSAContactSection().should('be.visible')
    contactUsPage.getDSAContactLink().should('be.visible').click()
    cy.url().should('include', '/digital-services-act-point-of-contact')

})
Then('the "Easily Connect with Our DSA Compliance Contact" header is displayed', () => {
    dsaContactPage.getTitle().should('be.visible')

})
Then('the "regulatory@telnyx.com" email is displayed', () => {
    dsaContactPage.getEmail()
    .should('be.visible')
    .and('contain.text', 'regulatory@telnyx.com')
})

// TC-14
When('the Integrations page is opened from the Developers mega menu', () => {
    header.getDevelopersBtn().should('be.visible').click()
    megaMenu.getIntegrationsCategory().should('be.visible').click()
    cy.url().should('include', '/integrations')
})
When('the search results section is scrolled into view', () => {
    integrationsPage.getIntegrationsSection().scrollIntoView()
    integrationsPage.getIntegrationsSection().should('be.visible')
})
Then('the Calendly option is displayed in the search results', () => {
    integrationsPage.getIntegration('Calendly')
    .scrollIntoView()
    .should('be.visible')
})
Then('the Jira option is displayed in the search results', () => {
    integrationsPage.getIntegration('Jira')
    .scrollIntoView()
    .should('be.visible')
})
Then('the OneDrive option is displayed in the search results', () => {
    integrationsPage.getIntegration('OneDrive')
    .scrollIntoView()
    .should('be.visible')
})