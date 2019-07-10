# kapten

Test plan definition:
Looks like there is no distinction of type of users, if there are different roles test cases must be adapted to check different roles, not necessary to adapt all of the test cases

Test cases designed using Gherkins language can be written in different ways:
As detailed as possible - specifying even UI elements, i.e. “user clicks on Continue button” 
A bit more generic - in a more business readable way, i.e. “user sign in with correct username and correct password”, the main benefit is that if UI changes, no need to modify the test cases.
It all depends on several things, for example the guidelines followed by the testing team, how detailed are the User Stories at the time of designing the test cases (i.e. if there are mock ups that have to be followed or team has a bit of freedom to design it), if the steps will be translated as specified to automated test cases, test cases reviewed by Business Analysts

The first tests were written in Gherkin as an example, the rest of them only the title.

In some scenarios, they depend on the business rules that I am not aware of.


Test Automation

Repository:

Tools used: 
cypress.io 
Cypress-cucumber-preprocessor
Webstorm for IDE

https://www.cypress.io/
https://www.npmjs.com/package/cypress-cucumber-preprocessor

To execute the tests:
Install both cypress and cypress-cucumber-preprocessor
Execute: ./node_modules/.bin/cypress open
Once the cypress test runner is open, double click the signin.feature

