import purchasePage from "../pageobjects/purchasePage"

describe('template spec', () => {
  
  beforeEach(() => {
    Cypress.on ('uncaught:exception', (err, runnable) => {
      return false
      })
    cy.visit('https://stackadapt-interview.s3.amazonaws.com/support/Chrysler+Optical+A+D-Frame+in+Tortoiseshell+by+LINDA+FARROW+Linear+%E2%80%93+LINDA+FARROW+(U.S.).html')
    })
  
  
  it('passes', () => {
    const purchasePageObj = new purchasePage();
    purchasePageObj.addToBasket();
  })
})