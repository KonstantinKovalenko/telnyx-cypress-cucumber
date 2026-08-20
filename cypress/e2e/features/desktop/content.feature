Feature: Content

  Scenario: Why Telnyx mega menu contains expected categories
    Given the Telnyx homepage is opened
    When the Why Telnyx header button is clicked
    Then the expected categories are displayed in the Why Telnyx mega menu

  Scenario: DSA Compliance Contact page displays the expected contact information
    Given the Contact Us page is opened
    When the DSA Contact page is opened from the DSA Compliance Contact section
    Then the "Easily Connect with Our DSA Compliance Contact" header is displayed
    And the "regulatory@telnyx.com" email is displayed

  Scenario: Integration page search results contain three popular services
    Given the Telnyx homepage is opened
    When the Integrations page is opened from the Developers mega menu
    And the search results section is scrolled into view
    Then the Calendly option is displayed in the search results
    And the Jira option is displayed in the search results
    And the OneDrive option is displayed in the search results