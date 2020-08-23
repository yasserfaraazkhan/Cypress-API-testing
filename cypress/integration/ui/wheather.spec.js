describe('on the NDTV website', () => {
    const CITY = 'Allahabad';
    let temperature;
    it('I should be able to navigate to wheather page', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
        cy.visit(Cypress.env('HOST'));
        cy.window()
            .should('have.property', 'Notification')
            .should('be.a', 'function');
        cy.get('#h_sub_menu').click({ force: true });
        cy.contains('WEATHER').click({ force: true });
    });

    it('I should see the panel to search city', () => {
        cy.get('#searchBox').should('be.visible');
        cy.get(`[for=${CITY}`).click();
        cy.get('.outerContainer')
            .find('div')
            .contains('Allahabad')
            .parent()
            .find('.tempRedText')
            .last()
            .invoke('text').then((text) => {
                temperature = text
            });
    });

    it('I should be able to make an API call to fetch city temperature', () => {
        let temperaturefromAPI;
        cy.makeRequest('GET', CITY)
            .its('body')
            .then((body) => {
                expect(body).to.have.property('name', CITY);
                expect(body.main).to.have.property('temp');
                temperaturefromAPI = body.main.temp;
                cy.compareDifference(temperature, temperaturefromAPI);
            });

    });
});
