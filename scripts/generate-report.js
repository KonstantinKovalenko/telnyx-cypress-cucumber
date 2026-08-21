import { generate } from 'multiple-cucumber-html-reporter'
import { exec } from 'node:child_process'

const reportPath = 'reports/cucumber-html'

await generate({
    jsonDir: 'reports/cucumber-json',
    reportPath,

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

const reportIndex = `${reportPath}/index.html`

console.log(`Report generated: ${reportIndex}`)

if (!process.env.CI) {
    console.log('Opening report in your default browser...')

    if (process.platform === 'win32') {
        exec(`start "" "${reportIndex}"`)
    } else if (process.platform === 'darwin') {
        exec(`open "${reportIndex}"`)
    } else {
        exec(`xdg-open "${reportIndex}"`)
    }
}