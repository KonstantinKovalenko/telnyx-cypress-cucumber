class VoiceAIAgentsPage {
    getFAQSection() {
        return cy.contains('h2', 'FAQ')
    }

    getLanguagesAccordion(){
        return cy.contains('h3', 'Which languages are supported?').parent()
    }
}

export default new VoiceAIAgentsPage()