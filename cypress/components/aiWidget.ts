class AIWidget {
    private selectors = {
        siteAIWidget: 'div[data-widget-theme="light"]',
        userMessageInput: '#user-message-input',
        chatMessages: '[class="text-base"]'
    }

    getOpenWidgetBtn(){
        return cy.get(this.selectors.siteAIWidget).find('button')
    }

    getUserMessageInput() {
        return cy.get(this.selectors.userMessageInput)
    }

    getChatMessages() {
        return cy.get(this.selectors.chatMessages)
    }

    getChatTitle(){
        return cy.contains('h1','Ask our')
    }

    getWelcomeMessage() {
        return cy.get(this.selectors.chatMessages).first()
    }

    getSendToChatBtn() {
        return cy.get(this.selectors.siteAIWidget).find('button.rounded-full.p-2.size-10')
    }
}

export default new AIWidget()