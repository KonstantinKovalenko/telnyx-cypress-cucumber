class MegaMenu {
    private selectors = {
        networkWirelessSection: '[aria-label="Network & Wireless"]',
        edgeSection: '[aria-label="Edge"]',
        aiSection: '[aria-label="AI"]'
    }

    getCloudVPNLink(){
        return cy.get(this.selectors.networkWirelessSection).contains('a', 'Cloud VPN')
    }

    getVoiceAIAgentsLink(){
        return cy.get(this.selectors.aiSection).contains('a', 'Voice AI Agents')
    }

    getInferenceAPILink(){
        return cy.get(this.selectors.edgeSection).contains('a', 'Inference API')
    }

    getHealthcareCategory(){
        return cy.contains('h2', 'Healthcare')
    }

    getDevDocsCategory(){
        return cy.contains('h2', 'Dev Docs').closest('a')
    }

    getTravelAndHospitalityCategory(){
        return cy.contains('h2', 'Travel and Hospitality')
    }
}

export default new MegaMenu()