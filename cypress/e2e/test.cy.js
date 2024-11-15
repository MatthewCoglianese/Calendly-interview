let numberEntered = 3
describe('template spec', () => {
  beforeEach((), =>{
    cy.visit(/)
    cy.get('#number')
    .type(numberEntered)
    cy,get('#start')
    .click()
  })
  it('Can type in number field', () => {
    cy.visit('/')
    cy.get('#number')
    .type(numberEntered)
    .should('have.text', numberEntered)
  
  })
  it('Can click play button', () => {
    cy.get('#'((numberEntered*numberEntered)-1)
    .should('exist')
  })

})

  