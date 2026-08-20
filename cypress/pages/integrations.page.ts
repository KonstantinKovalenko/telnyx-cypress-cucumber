class IntegrationsPage {
    private selectors = {
        integrationsSection: '#integrations'
    }

    getIntegrationsSection() {
        return cy.get(this.selectors.integrationsSection)
    }

    getIntegrationsList(){
        return cy.get(this.selectors.integrationsSection).find('li')
    }

    getIntegration(name: string) {
        return this.getIntegrationsList().contains(name)
    }
}

export default new IntegrationsPage()