class ContactUsPage {
    private selectors = {
        mainForm: '#mktoForm_1987',
        dsaContactSection: 'li[linktext="DSA Contact"]'
    }

    getMainForm() {
        return cy.get(this.selectors.mainForm)
    }

    getDSAContactSection() {
        return cy.get(this.selectors.dsaContactSection)
    }

    getDSAContactLink(){
        return cy.get(this.selectors.dsaContactSection).find('a[href="/digital-services-act-point-of-contact"]')
    }
}

export default new ContactUsPage()