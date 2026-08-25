Feature: Navigation

  Scenario: Unregistered user navigates to the Contact Us page
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Contact Us page
    Then the Contact Us page is displayed

  Scenario: Unregistered user navigates to the Cloud VPN page
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Cloud VPN page
    Then the Cloud VPN page is displayed

  Scenario: Unregistered user navigates to the Healthcare page
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Healthcare page
    Then the Healthcare page is displayed

  Scenario: Unregistered user navigates to the Dev Docs page
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the Dev Docs page
    Then the Dev Docs page is displayed