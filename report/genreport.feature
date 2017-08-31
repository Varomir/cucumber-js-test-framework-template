@report
Feature: Cucucmber-HTML-report should be generated After all test execution in a separate task
  As a software engineer
  I want to generate HTML test report
  So that I need to execute separate NPM task as posttest task
  
  Scenario: Cucumber result JSON file should be generated only after all test finished
    Then I have to run task special task for generate report