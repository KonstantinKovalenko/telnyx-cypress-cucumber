interface DownloadingUser {
    firstName: string
    lastName: string
    email: string
}

class VoiceAPIPage {
    private selectors = {
        validationMessage: '[class="mktoError"]',
        firstNameInput: '#FirstName',
        lastNameInput: '#LastName',
        emailInput: '#Email'
    }

    getDownloadPricingTitle() {
        return cy.contains('h2', 'Download SIP Trunking pricing')
    }

    getSubmitBtn() {
        return cy.get('button.mktoButton[type="submit"]')
    }

    getValidationMessage(){
        return cy.get(this.selectors.validationMessage)
    }

    fillDownloadingForm(user: DownloadingUser){
        cy.get(this.selectors.firstNameInput).type(user.firstName)
        cy.get(this.selectors.lastNameInput).type(user.lastName)
        cy.get(this.selectors.emailInput).type(user.email)
    }
}

export default new VoiceAPIPage()