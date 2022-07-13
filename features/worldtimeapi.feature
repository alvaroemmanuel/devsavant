Feature: Get time for IP
  Get the time for the given IP (this feature focuses on negative cases only)

  Scenario Outline: Invalid IP's
    Only invalid public IP's are provided

    Given I have the following IP: <ip>
    When I call the API to get the IP's current time
    Then I should see an error with the following text: "<text>"

    Examples:
      | ip            | text         |
      | 0.0.0.0       | malformed ip |
      | 192.168.1.254 | malformed ip |
