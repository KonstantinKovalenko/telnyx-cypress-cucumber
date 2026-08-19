class InferencePage {
    private selectors = {
        voiceAgentButtons: '[class*="group/voice"][class*="w-full"]',
        messageInput: '[aria-label="Type message here"]',
        userMessages: '.bg-palette-green-bright-10',
        aiMessages: '.bg-palette-tan-bright-20',
    }

    getChatTitle(){
        return cy.contains('span', 'CHAT TO AN AGENT')
    }

    getVoiceAgentButtons() {
        return cy.get(this.selectors.voiceAgentButtons)
    }

    getMessageInput() {
        return cy.get(this.selectors.messageInput)
    }

    getSendMessageBtn(){
        return cy.contains('span', 'SEND MESSAGE')
    }

    getChatElement() {
        return this.getChatTitle().parent().parent()
    }

    getUserMessages() {
        return this.getChatElement().find(this.selectors.userMessages)
    }

    getAIMessages() {
        return this.getChatElement().find(this.selectors.aiMessages)
    }
}

export default new InferencePage()