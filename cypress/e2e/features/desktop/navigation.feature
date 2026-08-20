Feature: Navigation

  Scenario: Navigation to the Contact Us page is possible
    Given the Telnyx homepage is opened
    When the Contact Us page is opened from the header
    Then the Contact Us page is displayed

  Scenario: Navigation to the Cloud VPN page is possible
    Given the Telnyx homepage is opened
    When the Cloud VPN page is opened from the Products mega menu
    Then the Cloud VPN page is displayed

  Scenario: Navigation to the Healthcare page is possible
    Given the Telnyx homepage is opened
    When the Healthcare page is opened from the Solutions mega menu
    Then the Healthcare page is displayed

  Scenario: Navigation to the Dev Docs page is possible
    Given the Telnyx homepage is opened
    When the Dev Docs page is opened from the Developers mega menu
    Then the Dev Docs page is displayed