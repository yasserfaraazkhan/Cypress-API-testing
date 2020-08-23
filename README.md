# Cypress-API-testing
This Repository contains API and UI spec.
Common methods to locate elements and assert
Common method to make API request

`example`:
```
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

```
