Feature: Mobile AI Assistant

  Scenario: Unregistered user interacts with the AI Assistant on mobile
    Given I am an unregistered user on the Telnyx homepage in a mobile viewport
    And cookies are accepted
    When I open the AI Assistant
    Then the AI Assistant chat is displayed
    And the greeting message is displayed

    When I send "Good day" to the AI Assistant
    Then my message is displayed in the AI Assistant chat
    And the AI Assistant response is displayed