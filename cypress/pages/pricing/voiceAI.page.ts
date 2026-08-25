class VoiceAIPage {
    private selectors = {
        estimateSection: '#estimate',
        minutesPerMonthInput: '#voice-ai-minutes'
    }

    getEstimateSection(){
        return cy.get(this.selectors.estimateSection)
    }

    getMinutesPerMonthInput(){
        return cy.get(this.selectors.minutesPerMonthInput)
    }

    getEstimatedCostText() {
        return cy.contains('span', 'per month at')
    }
}

export default new VoiceAIPage()