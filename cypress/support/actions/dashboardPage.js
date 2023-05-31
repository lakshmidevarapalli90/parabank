//locators

const OVERVIEW = 'a[href="/parabank/overview.htm"]';



//methods 

class DashboardPage {

  navigateToOverviewPage() {
    cy.get(OVERVIEW).click();
  }

}

module.exports = DashboardPage;