class InferencePage {
    private selectors = {
        voiceAgentButtons: '[class*="group/voice"][class*="w-full"]',
        messageInput: '[aria-label="Type message here"]',
        messagesContainer: 'div.flex-1.flex.flex-col.gap-new-xs.my-new-md',
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

    getChatMessages() {
        return cy.get(this.selectors.messagesContainer).children()
    }

    getValidationMessage(){
        return cy.contains('span', 'Please enter a message')
    }
}

export default new InferencePage()