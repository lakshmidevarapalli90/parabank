Feature: Check account balance

Scenario: Check account balance 

  Given customer registers for an account with ParaBank
  And verifies the account is created
  When customer login to the account 
  Then customer checks the account balance
  And customer log out of the application