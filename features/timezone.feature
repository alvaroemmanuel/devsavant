Feature: Timezone operations

  Scenario: Getting the time for the 45th item in the timezone list

    Given I get the timezone list
    When I get the time for timezone number 45 from the list
    Then I should get a successful response
