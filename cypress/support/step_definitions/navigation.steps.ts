import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import header from '../../components/header'
import megaMenu from '../../components/megaMenu'

// TC-01
When('the Contact Us page is opened from the header', () => {
    header.getContactUsBtn().should('be.visible').click()
})

Then('the Contact Us page is displayed', () => {
    cy.url().should('include', '/contact-us')
})

// TC-02
When('the Cloud VPN page is opened from the Products mega menu', () => {
    header.getProductsBtn().should('be.visible').click()
    megaMenu.getCloudVPNLink().should('be.visible').click()
})

Then('the Cloud VPN page is displayed', () => {
    cy.url().should('include', '/cloud-vpn')
})

// TC-03
When('the Healthcare page is opened from the Solutions mega menu', () => {
    header.getSolutionsBtn().should('be.visible').click()
    megaMenu.getHealthcareCategory().should('be.visible').click()
})

Then('the Healthcare page is displayed', () => {
    cy.url().should('include', '/healthcare')
})

// TC-04
When('the Dev Docs page is opened from the Developers mega menu', () => {
    header.getDevelopersBtn().should('be.visible').click()
    megaMenu.getDevDocsCategory()
        .should('be.visible')
        .invoke('removeAttr', 'target')
        .click()
})

Then('the Dev Docs page is displayed', () => {
    cy.url().should('eq', 'https://developers.telnyx.com/docs/overview')
})