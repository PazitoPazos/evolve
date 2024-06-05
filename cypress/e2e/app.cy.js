describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:3000/')

    cy.contains('Evolve')
  })
})
