Feature: The Test Orange HRM Login Page
    @HRM_SmokeTest
    Scenario Outline: As a user, I want to Login Orange HRM Application

        Given I am on the Orange HRM Login page
        When User Enter <Username> and <Password>
        Then I should be able to login into HRM App

        Examples:
            | Username | Password |
            | Admin    | admin123 |