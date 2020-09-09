// https://docs.cypress.io/api/introduction/api.html

describe('Reset formular', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Enter login and password then reset', () => {
        cy.get('#input-8')
          .type('mm16389')

        cy.get('#input-11')
          .type('mmi163')
         
        // adding arguments to force check
        cy.get('[type="checkbox"]')
          .check({force:true}) 

         // then click the reset button
         cy.get('#reset-btn')
         .click()
    })


    it('Click submit button with empty field', () => {
     
       cy.get('#submit-btn')
       .click()

       cy.get('.container').contains('Name is required')

       cy.get('.container').contains('Password is required')
  })
})
