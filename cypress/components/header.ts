class Header {
    private selectors = {
        globalHeader: '#site-header'
    }

    getHeader(){
        return cy.get(this.selectors.globalHeader)
    }

    /* getHamburgerBtn(){
        return cy.get('button[aria-controls="main-menu-content"]')
    } */

    getProductsBtn(){
        return cy.get('button').contains('span', 'Products')
    }

    getSolutionsBtn(){
        return cy.get('button').contains('span', 'Solutions')
    }

    /* getPricingBtn(){
        return cy.get('button').contains('span', 'Pricing')
    }
 */
    /* getResourcesBtn(){
        return cy.get('button').contains('span', 'Resources')
    } */

    getDevelopersBtn(){
        return cy.get('button').contains('span', 'Developers')
    }

    getContactUsBtn(){
        return cy.get('header').find('div.ml-auto').contains('a', 'Contact us')
    }
}

export default new Header()