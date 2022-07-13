Feature: Search results
  Follow the "I feel lucky" button on Google

  Scenario: Go to the "I feel lucky" results on Google Search

    Given I'm a www.google.com user
    When I type Devsavant in the search box and click on the "I'm Feeling Lucky" button
    Then I should be taken directly to the most relevant result
