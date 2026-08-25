Feature: Content

  Scenario: Unregistered user opens the Why Telnyx mega menu
    Given I am an unregistered user on the Telnyx homepage
    When I open the Why Telnyx mega menu
    Then the expected categories are displayed

  Scenario: Unregistered user views the DSA Compliance Contact information
    Given I am an unregistered user on the Contact Us page
    When I navigate to the DSA Compliance Contact page
    Then the DSA Compliance Contact information is displayed

  Scenario: Unregistered user finds popular services in the Integrations section
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Integrations section
    Then the Calendly, Jira, and OneDrive integrations are displayed