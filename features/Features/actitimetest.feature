Feature: The Test actiTime Page
    @QAHub_SmokeTest
    Scenario Outline: As a user, I want to login actiTime Application

        Given I am on the actitime landing page
        When I Enter <Username> and <Password>
        Then I should be able to login actiTime application

        Examples:
            | Username | Password |
            | abc      | 123      |