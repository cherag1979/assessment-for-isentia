Feature: Adding a new user
    As a user of AngularJSWebTables assessment
    I should be able to add a new user
    And verify that the user has been added successfully

    Scenario: Adding a new user
        Given I go to "http://www.way2automation.com/angularjs-protractor/webtables/"
        When I add a new user
        Then new user should be added successfully