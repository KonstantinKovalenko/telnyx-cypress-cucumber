class TravelAndHospitalityPage {
    private selectors = {
        tabsCarousel: '[class*="flex"][class*="items-center"]',
        whyTelnyxTabs: '.flex.items-center',
        tabsContentHeaders: '[class*="order-2"]'
    }

    getWhyTelnyxSection() {
        return cy.contains('h2', 'Service that scales without slowing down')
    }

    getWhyTelnyxTabs(){
        return cy.get(this.selectors.tabsCarousel).find('button.font-formula.text-xs.font-extrabold')
    }

    getTabContentHeader(){
        return cy.get(this.selectors.tabsContentHeaders).find('h3')
    }
}

export default new TravelAndHospitalityPage()