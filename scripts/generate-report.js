import { generate } from 'multiple-cucumber-html-reporter'

await generate({
    jsonDir: 'reports/cucumber-json',
    reportPath: 'reports/cucumber-html',

    pageTitle: 'Telnyx Cypress + Cucumber Test Report',
    reportName: 'Telnyx E2E Test Report',

    displayDuration: true,
    displayReportTime: true,

    metadata: {
        browser: {
            name: 'Chrome',
            version: 'CI',
        },
        device: 'Desktop + Mobile',
        platform: {
            name: 'GitHub Actions',
            version: 'CI',
        },
    },

    customData: {
        title: 'Test Execution',
        data: [
            {
                label: 'Project',
                value: 'Telnyx Cypress + Cucumber',
            },
            {
                label: 'Framework',
                value: 'Cypress + Cucumber',
            },
        ],
    },
})