Feature: Mobile Ai Assistant

  Scenario: AI Assistant chat works correctly in mobile view
    Given the Telnyx homepage is opened in a mobile viewport
    And cookies are accepted
    When the AI Assistant button is clicked
    Then the AI Assistant chat is displayed
    And the greeting message is displayed

    When "Hello" is entered into the chat input and the message is submitted
    Then the submitted "Hello" message is displayed in the chat
    And the AI Assistant response is displayed in the chat