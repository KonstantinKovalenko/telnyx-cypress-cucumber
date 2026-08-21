class ContactUsPage {
    private selectors = {
        dsaContactSection: 'li[linktext="DSA Contact"]'
    }

    getDSAContactSection() {
        return cy.get(this.selectors.dsaContactSection)
    }

    getDSAContactLink(){
        return cy.get(this.selectors.dsaContactSection).find('a[href="/digital-services-act-point-of-contact"]')
    }
}

export default new ContactUsPage()