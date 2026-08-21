# Cypress Cucumber Automation Framework

End-to-end test automation framework for the [**Telnyx**](https://telnyx.com/) website built with **Cypress**, **Cucumber** and **TypeScript**.

✔ Page Object Model (POM) architecture  
✔ Cucumber BDD test scenarios  
✔ Desktop and mobile test configurations  
✔ Reusable step definitions  
✔ Cucumber HTML reporting  
✔ GitHub Actions CI  
✔ GitHub Pages report deployment

[![CI](https://github.com/KonstantinKovalenko/telnyx-cypress-cucumber/actions/workflows/cypress.yml/badge.svg)](https://github.com/KonstantinKovalenko/telnyx-cypress-cucumber/actions/workflows/cypress.yml)

[![GitHub Pages](https://img.shields.io/badge/View-Latest_Report-blue?logo=github)](https://konstantinkovalenko.github.io/telnyx-cypress-cucumber/)

---

## Test Coverage

The test suite contains **14 desktop tests** and **1 mobile test**.

| ID | Test Case | Coverage |
|---------|-------------|-------------|
| TC-01 | Verify user can navigate to the Contact Us page from the header | Navigation |
| TC-02 | Verify navigation to the Cloud VPN page is possible | Navigation |
| TC-03 | Verify navigation to the Healthcare page is possible | Navigation |
| TC-04 | Verify navigation to the Dev Docs page is possible | Navigation |
| TC-05 | Verify FAQ questions on the Voice AI Agents page expand and collapse correctly | UI |
| TC-06 | Verify a default AI Agent response to a user message | UI |
| TC-07 | Verify content is changed through tab selection in the Why Telnyx? section | UI |
| TC-08 | Verify estimated cost is updated based on the entered monthly volume | UI |
| TC-09 | Verify the Download SIP Trunking Pricing form displays validation messages after empty submission | Forms |
| TC-10 | Verify the Download SIP Trunking Pricing form can be submitted using valid data | Forms |
| TC-11 | Verify a validation message is displayed when an empty message is submitted in AI Agents chat | Forms |
| TC-12 | Verify the expected categories are displayed in the Why Telnyx mega menu | Content |
| TC-13 | Verify the DSA Compliance Contact information is displayed correctly | Content |
| TC-14 | Verify the Integration page search results contain three popular services | Content |
| TC-15 | Verify AI Assistant functionality in mobile view | AI Assistant |

---

## Continuous Integration

The project uses **GitHub Actions** to automatically execute the test suite.

The CI pipeline:

1. Checks out the repository
2. Sets up Node.js 24
3. Installs dependencies using `npm ci`
4. Executes desktop tests using the **default** Cypress configuration
5. Executes mobile tests using the **mobile** Cypress configuration
6. Generates Cucumber JSON results
7. Generates an HTML test report from the Cucumber JSON results
8. Uploads test artifacts
9. Deploys the latest HTML report to GitHub Pages

---

## Reporting

Test results are generated in Cucumber JSON format:

```
reports/cucumber-json/
├── desktop.json
└── mobile.json
```
The JSON results are converted into an interactive HTML report using `multiple-cucumber-html-reporter`:

```
reports/cucumber-html/
```

The generated report contains information about:
- Features  
- Scenarios  
- Steps  
- Passed and failed tests  
- Execution duration  
- Test execution details  

---

## Project Structure

```
telnyx-cypress-cucumber/
│
├── .github/
│   └── workflows/
│       └── cypress.yml
│
├── assets/
│   └── test-cases/
│
├── cypress/
│   ├── components/
│   │
│   ├── e2e/
│   │   └── features/
│   │       ├── desktop/
│   │       │   └── *.feature
│   │       │
│   │       └── mobile/
│   │           └── mobileAIWidget.feature
│   │
│   ├── fixtures/
│   │
│   ├── pages/
│   │
│   ├── support/
│   │   ├── commands.ts
│   │   ├── e2e.ts
│   │   └── step_definitions/
│   │       └── *.steps.ts
│   │
│   └── tsconfig.json
│
├── scripts/
│   └── generate-report.js
│
├── .gitignore
├── cypress.config.ts
├── cypress.mobile.config.ts
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 24+  
- npm  
- Git  

### Installation

Clone the repository:

```bash
git clone https://github.com/KonstantinKovalenko/telnyx-cypress-cucumber.git
```

Install dependencies:

```
npm install
```

---

### Useful Scripts

| Script | Description |
|---------|-------------|
| `npm run cy:open` | Open Cypress Test Runner with the desktop configuration |
| `npm run cy:run` | Run all desktop Cucumber tests in headless mode |
| `npm run cy:open:mobile` | Open Cypress Test Runner with the mobile configuration |
| `npm run cy:run:mobile` | Run mobile Cucumber tests in headless mode |
| `npm run report` | Generate the Cucumber HTML report from test results |

---

## Author

Konstantin Kovalenko

* GitHub: [KonstantinKovalenko](https://github.com/KonstantinKovalenko)
* LinkedIn: [Kostyantyn Kovalenko](https://www.linkedin.com/in/kostyantyn-kovalenko/)
* Telegram: [@kovakost](https://t.me/kovakost)
* Email: chvyaka.kk@gmail.com