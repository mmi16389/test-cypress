// https://docs.cypress.io/api/introduction/api.html

describe('Validate formular', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Enter login and password', () => {
    cy.get('#input-8')
      .type('mm16389')

    cy.get('#input-11')
      .type('mmi163')

    // adding arguments to force check
    cy.get('[type="checkbox"]')
      .check({ force: true })

    cy.get('#submit-btn')
      .click({ force: true })

    cy.server()
    cy.route('/Home').as('home')
    cy.visit('/Home')

    cy.contains('h1', 'Connexion réussie')

  })
})
