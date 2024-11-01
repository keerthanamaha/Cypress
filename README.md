# Cypress Login Test Suite for DemoBlaze

This repository contains a Cypress test suite for testing login functionality on the [DemoBlaze website](https://www.demoblaze.com/index.html). The tests cover various login scenarios including positive, negative, and exception cases.

## Table of Contents
- [Project Overview](#project-overview)
- [Test Cases](#test-cases)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Folder Structure](#folder-structure)
- [Running Tests](#running-tests)


## Project Overview

This project demonstrates Cypress automation testing for the login functionality of the DemoBlaze website. The main scenarios tested are:
1. **Positive Case**: Successful login with valid credentials.
2. **Negative Case**: Failed login with invalid credentials.
3. **Exception Case**: Error handling when no credentials are entered.

## Test Cases

- **Positive Case**: Verifies login with valid credentials and expects navigation to the homepage upon success.
- **Negative Case**: Tests login with invalid credentials, expecting an alert with the message "User does not exist."
- **Exception Case**: Attempts to log in with no credentials, expecting an alert indicating that both username and password fields must be filled.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [Git](https://git-scm.com/)
- [Cypress](https://www.cypress.io/) (installed via `npm`)

## Installation

1. **Clone the repository**:
   ```bash
   git clone git@github.com:keerthanamaha/Cypress.git
   cd demoblaze-cypress-login-test
2. Install dependencies:
   ```bash
   npm install
3. Set up test data: Review and adjust the credentials and alert messages if necessary in cypress/fixtures/mockdata.js.

## Folder Structure

1. cypress/fixtures/mockdata.js: Contains mock data for valid and invalid credentials and alert messages.
2. cypress/e2e/loginTests.cy.js: Main Cypress test suite with positive, negative, and exception test cases.
3. cypress.config.js: Cypress configuration file for customizing test behavior if needed.

## Running Tests
- To run tests, open the Cypress Test Runner or run tests directly in the command line.

## Running with the Cypress Test Runner
1. Launch Cypress:
```bash
npx cypress open
2. In the Cypress Test Runner, select loginTests.cy.js under cypress/e2e to run the tests interactively.
