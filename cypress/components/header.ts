class Header {
    getProductsBtn(){
        return cy.get('button').contains('span', 'Products')
    }

    getSolutionsBtn(){
        return cy.get('button').contains('span', 'Solutions')
    }

    getPricingBtn(){
        return cy.get('button').contains('span', 'Pricing')
    }

    getDevelopersBtn(){
        return cy.get('button').contains('span', 'Developers')
    }

    getContactUsBtn(){
        return cy.get('header').find('div.ml-auto').contains('a', 'Contact us')
    }

    getWhyTelnyxBtn(){
        return cy.get('button').contains('span', 'Why Telnyx')
    }
}

export default new Header()