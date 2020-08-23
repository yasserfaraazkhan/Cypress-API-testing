
/*
* common command to assert element not visible
*/
Cypress.Commands.add('assertElementNotExist', (locator) => {
  return cy.get(locator).should('not.exist');
});

/*
* common command to get element and assert visibility
*/
Cypress.Commands.add('findElement', (locator) => {
  return cy.get(locator).should('be.visible');
});

/*
* common command to get element and assert text
*/
Cypress.Commands.add('findElementAndAssertText', (locator, textToAssert) => {
  return cy.get(locator).should('be.visible').invoke('text').should('eq', textToAssert);
});

/*
* common command to get element by contains method
* and assert visibility
*/
Cypress.Commands.add('findElementContains', (locator) => {
  return cy.contains(locator).should('be.visible');
});

/*
* common command request method
*/
Cypress.Commands.add('makeRequest', (method, queryParameter) => {
  return cy.request({
    method: method,
    url: Cypress.env('API_HOST') + Cypress.env('API_PATH'),
    failOnStatusCode: false,
    qs: {
      q: queryParameter,
      appid: "7fe67bf08c80ded756e598d6f8fedaea",
      units: "metric"
    }
  });
});

/*
* common command to compare difference
*/
Cypress.Commands.add('compareDifference', (temperatureFROMUI, temperatureFromAPI) => {
  cy.log('Difference in readings is ', temperatureFromAPI - parseInt(temperatureFROMUI));
});
