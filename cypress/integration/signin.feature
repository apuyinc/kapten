Feature: Sign in

  User sign in process


  Scenario:
    Given user navigates to sign in page
    When user sign in with username 'google@assistance.google' and password 'GoogleAssistance1'
    Then user is in 'commander' screen

  Scenario:
    Given user navigates to sign in page
    And user sign in with username 'google@assistance.google' and password 'GoogleAssistance1'
    When user sign out
    Then user is in 'signin' page
    And user cannot go back to 'commander' screen


  Scenario:
    Given user navigates to sign in page
    When user sign in with username 'google@assistance.google' and password 'NotCorrectPassword1'
    Then user is in 'signin' page
    And "Incorrect credentials" message is shown
    And email field contains 'google@assistance.google'
    And password field is empty
