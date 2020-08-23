describe("Using Wheather API", () => {
    const CITY = "Allahabad";

    it('I should be able to make an API call to fetch city temperature', () => {
        cy.makeRequest('GET', CITY).its('body').then(body => {
            expect(body).to.have.property('name', CITY)
            expect(body.main).to.have.property('temp')
        })
    });
    it('I should be able to see error message on wrong city Search', () => {
        const DUMMY_CITY = "dummy";

        cy.makeRequest('GET', DUMMY_CITY).its('body').then(body => {
            expect(body).to.have.property('cod', '404')
            expect(body).to.have.property('message', 'city not found')
        })
    });

    // The actuall error message should be 'method not allowed'
    it('I should be able to see error message on performing a DELETE method on search api', () => {
        cy.makeRequest('DELETE', CITY).its('body').then(body => {

            expect(body).to.have.property('cod', '405')
            expect(body).to.have.property('message', 'Internal error')
        })
    });

    // Intentionally making it fail as currently post call is allowed on GET api
    it('I should be able to see error message on performing a POST method on search api', () => {
        cy.makeRequest('POST', CITY).its('body').then(body => {

            expect(body).to.have.property('cod', '405')
            expect(body).to.have.property('message', 'Internal error')
        })
    });
    
});
