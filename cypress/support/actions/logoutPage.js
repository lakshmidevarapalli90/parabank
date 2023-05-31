//locator

const LOGOUT_BUTTON = 'a[href="/parabank/logout.htm"]';


//methods 

class LogoutPage {

  logoutOfApplication(){
    cy.get(LOGOUT_BUTTON).click();
  }

}

module.exports = LogoutPage;