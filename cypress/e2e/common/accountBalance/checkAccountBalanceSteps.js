import {Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import RegisterPage from '../../../support/actions/registerPage';
import DashboardPage from '../../../support/actions/dashboardPage';
import OverviewPage from '../../../support/actions/overviewPage';
import LogoutPage from '../../../support/actions/logoutPage';

const registerpage = new RegisterPage();
const dashboardPage = new DashboardPage();
const overviewPage = new OverviewPage();
const logoutPage = new LogoutPage();


Given(/^customer registers for an account with ParaBank$/, () => {
  cy.visit(Cypress.config().baseUrl, {timeout: 30000});
  registerpage.navigateToRegisterPage();
  registerpage.enterRegistrationDetails();
});


When(/^verifies the account is created$/, () => {
	registerpage.verifyAccountCreated();
});


When(/^customer login to the account$/, () => {
	dashboardPage.navigateToOverviewPage();
});

Then(/^customer checks the account balance$/, () => {
  overviewPage.verifyAmountInAccounts();
  overviewPage.verifyGetAccountAPI();
});


Then(/^customer log out of the application$/, () => {
	logoutPage.logoutOfApplication();
});

