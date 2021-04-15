const {user} = require("../../data") 

describe('Test Case Add/Delete Bank', function () {
    beforeEach(() => {
        cy.visit('https://demo.midtrans.com/')
      })
    it ('1. User can open demo page', function (){
        cy.wait(1000)
        cy.contains('BUY NOW').click({force:true})
        cy.wait(1500)           
        cy.get('[data-reactid=".0.0.1.0.3.0.0.1"] > .input > input').clear().type('10000')
    //     cy.get('input#password.form-control').type('12qwer34')
    //     cy.wait(1000)
    //     cy.get('button.btn.btn-primary.btn-block').click()
    //     cy.wait(1000)
    //     cy.url().should('include', '/trade')
    //     cy.contains('Pengaturan').click({force:true})
    //     cy.wait(1000)
    //     cy.contains('metode pembayaran', {matchCase:false}).click()
    })
})