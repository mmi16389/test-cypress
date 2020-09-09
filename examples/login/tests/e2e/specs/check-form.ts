// https://docs.cypress.io/api/introduction/api.html

describe('Fill form login', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Check the title', () => {
        cy.title()
          .should('eq', 'login')
    })

    it('Enter login and password', () => {
        cy.get('#input-8')
          .type('mm16389')

        cy.get('#input-11')
          .type('mmi163')
         
        // adding arguments to force check
        cy.get('[type="checkbox"]')
          .check({force:true}) 
    })
})
