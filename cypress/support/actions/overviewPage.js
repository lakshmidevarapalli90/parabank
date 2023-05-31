//locators 

const AMOUNT = 'tr[ng-repeat="account in accounts"] td';
const ACCOUNT = 'a[href*="activity.htm?id="]';
const OPEN_ACCOUNT = 'a[href="/parabank/openaccount.htm"]';

//methods 

class OverviewPage {

  verifyAmountInAccounts() {
    cy.get(AMOUNT).eq(1).then(($el) => {
      expect($el.text()).equal('$10000.00');
    })
  }

  verifyGetAccountAPI() {
    cy.get(ACCOUNT).then(($el) => {
      const accountNumber = $el.text();
      cy.request('https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/' + accountNumber).then(response => {
        expect(response.status).equal(200);
        const customerNumber = response.body.customerId;
        const getAccountUrl = 'https://parabank.parasoft.com/parabank/services_proxy/bank/customers/'+ customerNumber +'/accounts';
        cy.intercept('GET', getAccountUrl).as('getAccounts');
        cy.reload();
        cy.wait('@getAccounts').then(({response}) => { 
          expect(response.statusCode).equal(200);
        })
      })
    })
  }
}

module.exports = OverviewPage;