@occdatabase
Feature: Database Comparison

  Scenario: Comparing testing database against prod-like environment
    Given Connecting to the first database and storing data
    Given Connecting to the second database and storing data
    When Star comparing data from two databases