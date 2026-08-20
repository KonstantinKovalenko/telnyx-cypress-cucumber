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
        return cy.contains('span.typography-p-min.text-palette-grey-60', 'per month at')
    }

}

export default new VoiceAIPage()