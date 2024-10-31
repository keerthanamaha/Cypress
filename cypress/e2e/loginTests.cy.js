//loginTests.cy.js
// Import mock data
import { validCredentials, invalidCredentials, alertMessages } from '../fixtures/mockData';

describe('Login Test Cases', () => {

  beforeEach(() => {
    // Visit the DemoBlaze website before each test
    cy.visit('https://www.demoblaze.com/index.html');
    // Click on the login button to open the modal
    cy.get('#login2').click();
  });

  it('Logs in with valid credentials and verifies successful login - Positive Case', () => {
    // Enter valid credentials
    cy.get('#loginusername').should('be.visible').type(validCredentials.username);
    cy.get('#loginpassword').type(validCredentials.password);

    // Click on the Log in button in the modal
    cy.contains('button', 'Log in').click();

    // Verify the final URL after successful login
    cy.url().should('eq', 'https://www.demoblaze.com/index.html');
  });

  it('Shows an alert when logging in with invalid credentials - Negative Case', () => {
    // Enter invalid credentials
    cy.get('#loginusername').should('be.visible').type(invalidCredentials.username);
    cy.get('#loginpassword').type(invalidCredentials.password);

    // Stub the alert to capture the alert message
    cy.on('window:alert', (alertText) => {
      // Assert the alert message
      expect(alertText).to.equal(alertMessages.invalidUser);
    });

    // Click on the Log in button in the modal
    cy.contains('button', 'Log in').click();
  });

  it('Shows an alert when no credentials are entered - Exception Case', () => {
    // Click on the Log in button without entering any credentials
    cy.contains('button', 'Log in').click();

    // Stub the alert to capture the alert message
    cy.on('window:alert', (alertText) => {
      // Assert the alert message
      expect(alertText).to.equal(alertMessages.emptyFields);
    });
  });
});
