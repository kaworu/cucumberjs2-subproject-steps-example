# features/earth.feature - the planet Earth app Gherkin stuff

Feature: Looking at the fifth planet
    As a Little Prince
    I want to see if the street lamp is bright on the fifth planet
    So that I know if it is night or day

Scenario: Seeing the street lamp lit
        Given the time is 01:21:52
        When  I look at the fifth planet
        Then  I should see the street lamp

Scenario: Seeing the street lamp dimmed
        Given the time is 02:42:31
        When  I look at the fifth planet
        Then  I should not see the street lamp
