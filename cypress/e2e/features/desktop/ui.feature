Feature: User Interface

  Scenario: FAQ questions on the Voice AI Agents page expand and collapse correctly
    Given the Telnyx homepage is opened
    When the Voice AI Agents page is opened from the Products mega menu
    And the FAQ section is scrolled into view
    Then the FAQ section is displayed

    When the "Which languages are supported?" accordion item is clicked
    Then the accordion item is expanded

    When the "Which languages are supported?" accordion item is clicked again
    Then the accordion item is collapsed

  Scenario: Default AI Agent answer to user's message
    Given the Telnyx homepage is opened
    When the Inference API page is opened from the Products mega menu
    And the CHAT TO AN AGENT element is scrolled into view
    Then the first AI Agent is selected by default

    When the "Hello" message is sent to the AI Agent
    Then the "Hello" message is displayed in the chat
    And the AI-generated answer is displayed in the chat

  Scenario: Why Telnyx content changes through tab selection
    Given the Telnyx homepage is opened
    When the Travel and Hospitality page is opened from the Solutions mega menu
    And the WHY TELNYX? section is scrolled into view
    Then the first tab is selected by default
    And the first tab content is displayed

    When the second tab is clicked
    Then the second tab is selected
    And the content associated with the second tab is displayed and differs from the previously displayed content

  Scenario: Estimated cost changes according to the entered monthly minutes
    Given the Telnyx homepage is opened
    When the Voice AI pricing page is opened from the Pricing mega menu
    And the ESTIMATE YOUR COST section is scrolled into view
    Then the Minutes per month input is displayed
    And the Estimated cost per minute text is displayed

    When "450,000" is entered into the Minutes per month input
    Then the Estimated cost per month text is changed accordingly