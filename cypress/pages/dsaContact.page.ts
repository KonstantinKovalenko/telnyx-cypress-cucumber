class DSAContactPage {
    getTitle() {
        return cy.contains('h2', 'Easily Connect with Our DSA Compliance Contact')
    }

    getEmail(){
        return cy.get('a[href="mailto:regulatory@telnyx.com"]')
    }
}

export default new DSAContactPage()