Feature: User Interface

  Scenario: Unregistered user expands and collapses an FAQ question
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Voice AI Agents FAQ section
    And I expand the "Which languages are supported?" question
    Then the answer is displayed

    When I collapse the "Which languages are supported?" question
    Then the answer is hidden

  Scenario: Unregistered user receives an AI Agent response
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the AI Agent chat
    Then the default AI Agent is selected

    When I send "Hello" to the AI Agent
    Then my message is displayed in the chat
    And the AI Agent response is displayed

  Scenario: Unregistered user compares information in the Why Telnyx section
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Why Telnyx section on the Travel and Hospitality page
    Then the first tab is selected
    And its content is displayed

    When I select the second tab
    Then the second tab content is displayed
    And it differs from the content of the first tab

  Scenario: Unregistered user views the estimated Voice AI cost
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Voice AI cost calculator
    Then the cost calculator is displayed

    When I enter 450,000 minutes per month
    Then the estimated monthly cost is updated accordingly