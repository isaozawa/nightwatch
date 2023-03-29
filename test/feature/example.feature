Feature: Test Addition

  Scenario: Adding two numbers
    Given I'm a user
    When I sum 2 and 3
    Then The value is 5
