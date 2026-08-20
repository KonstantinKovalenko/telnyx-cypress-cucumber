Feature: Forms & Validations

  Scenario: Download SIP Trunking Pricing form displays validation messages after empty submission
    Given the Telnyx homepage is opened
    When the Voice API page is opened from the Pricing mega menu
    And the Download SIP Trunking Pricing form is scrolled into view
    And the Submit Button is clicked
    Then the "This field is required" validation message is displayed

  Scenario: Download SIP Trunking Pricing form can be submitted using valid data
    Given the Voice API page is opened
    When the Download SIP Trunking pricing form is scrolled into view
    And all mandatory fields are filled with valid data
    And the Submit button is clicked
    Then the confirmation message is displayed on the new page

  Scenario: AI Agents chat displays validation message for an empty message
    Given the Inference API page is opened
    When the CHAT TO AN AGENT page element is scrolled into view
    And the chat message input is left empty
    And the SEND MESSAGE button is clicked
    Then the "Please enter a message" validation message is displayed