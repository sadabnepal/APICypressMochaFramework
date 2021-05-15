/// <reference types="Cypress" />

const baseURL = 'https://reqres.in'

describe('Validate GET requests', () => {

    it('Should POST POST /api/users', ()=> {
        cy.request({
            method: 'POST',
            url: `${baseURL}/api/users`,
            body: {
                "name": "Sadab Saqib",
                "job": "Test Automation"
            }
        }).then((response) => {
            expect(response.body.name).not.null;
            expect(response.body.job).not.null;
            expect(response.body.id).not.null;
            expect(response.body.createdAt).not.null;
        })
    })
    
    it('Shoul GET /api/users?page=2', ()=> {
        cy.request({
            method: 'GET',
            url: `${baseURL}/api/users?page=2`,

        }).then((response) => {
            expect(response.body.total_pages).eq(2)
            expect(response.body.data[0].email).is.not.null
            expect(response.body.data).to.have.length(6)
         })
    });
});