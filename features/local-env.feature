@smoke
Feature: Local environment should be configured for executing End2End tests
  As a software engineer
  I want to run End2End Selenium tests
  So that I need to verify my local environment was configured for it

  Scenario: Selenium test infrastructure should be configured at developers local machine
    Given I open a webdriver HUB page
    When I clicked to 'Refresh Session' button
    Then I will see one open 'QWERTY' session