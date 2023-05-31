//locators

const REGISTER = "Register";
const FIRST_NAME = 'input[name="customer.firstName"]';
const LAST_NAME = 'input[name="customer.lastName"]';
const STREET = 'input[name="customer.address.street"]';
const CITY = 'input[name="customer.address.city"]';
const STATE = 'input[name="customer.address.state"]';
const ZIPCODE = 'input[name="customer.address.zipCode"]';
const PHONE_NUMBER = 'input[name="customer.phoneNumber"]';
const SSN = 'input[name="customer.ssn"]';
const USERNAME = 'input[name="customer.username"]';
const PASSWORD = 'input[name="customer.password"]';
const REPEAT_PASSWORD = 'input#repeatedPassword';
const REGISTER_BUTTON = 'input[value="Register"]';



//constants
const REGISTER_TITLE = "ParaBank | Register for Free Online Account Access"
const ACCOUNT_CREATION_TITLE = "ParaBank | Customer Created"

//methods 

class RegisterPage {

  navigateToRegisterPage() {
    cy.contains('a', REGISTER).click();
    cy.title().should('eq', REGISTER_TITLE); 
  }

  enterRegistrationDetails() {

    const name = "LakshmiITV";
    const randomUsername = 	name + [Math.floor( Math.random() * 100000 )];

    cy.get(FIRST_NAME).type("Lakshmi");
    cy.get(LAST_NAME).type("Devarapalli");
    cy.get(STREET).type("Street");
    cy.get(CITY).type("test city");
    cy.get(STATE).type("test state");
    cy.get(ZIPCODE).type("BN13 1JZ");
    cy.get(PHONE_NUMBER).type("07987987987");
    cy.get(SSN).type("AB123456A");
    cy.get(USERNAME).type(randomUsername);
    cy.get(PASSWORD).type("Testing");
    cy.get(REPEAT_PASSWORD).type("Testing");
    cy.get(REGISTER_BUTTON).click();
  }

  verifyAccountCreated(){
    cy.title().should('eq', ACCOUNT_CREATION_TITLE);
  }

}

module.exports = RegisterPage;
