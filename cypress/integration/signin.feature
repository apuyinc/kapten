Feature: Sign in

  User sign in process

  Scenario: User is able to sign in with correct username and correct password
    Given user navigates to sign in page
    When user sign in with registered email and correct password
    Then user is in 'commander' page

  Scenario: user is not able to enter again the application once signed out
    Given user navigates to sign in page
    And user sign in with registered email and correct password
    When user sign out
    Then user is in 'signin' page
    And user cannot go back to 'commander' screen

  Scenario: user is not able to sign in with correct username but wrong password
    Given user navigates to sign in page
    When user sign in with username 'google@assistance.google' and password 'NotCorrectPassword1'
    Then user is in 'signin' page
    And 'Incorrect credentials. Please check and try again.' message is shown
    And email field contains 'google@assistance.google'
    And password field contains ''
