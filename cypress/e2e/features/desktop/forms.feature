Feature: Forms & Validations

  Scenario: Unregistered user is prevented from submitting an empty pricing form
    Given I am an unregistered user on the Telnyx homepage
    When I navigate to the SIP Trunking pricing form from the Pricing menu
    And I submit the form without entering any information
    Then a required field validation message is displayed

  Scenario: Unregistered user submits the SIP Trunking pricing form successfully
    Given I am an unregistered user on the Voice API page
    When I navigate to the SIP Trunking pricing form
    And I submit the form with valid information
    Then a confirmation message is displayed

  Scenario: Unregistered user is prevented from sending an empty AI Agent message
    Given I am an unregistered user on the Inference API page
    When I navigate to the AI Agent chat element
    And I try to send an empty message
    Then a message validation error is displayed