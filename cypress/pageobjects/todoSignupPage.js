/// <reference types="cypress" />

class SignupPage {

    elements = {
        nameLbl : () =>
            cy.get('div[class="form-group "] label[for="name"]'),
        nameForm : () =>
            cy.get('#name'),
        emailLbl : () =>
            cy.get('div[class="form-group "] label[for="email"]'),
        emailForm : () =>
            cy.get('#email'),
        passwordLbl : () =>
            cy.get('div[class="form-group "] label[for="password"]'),
        passwordForm : () =>
            cy.get('#password'),
        termsChkbx : () =>
            cy.get('#agree'),
        termsLnk : () =>
            cy.get('a[target]'),
        signupBtn : () =>
            cy.get('#submit')
    }

    enterName(name) {
        this.elements.nameForm().should('be.visible');
        this.elements.nameForm().clear();
        this.elements.nameForm().type(name);
    }
    
    enterEmail(email) {
        this.elements.emailForm().should('be.visible');
        this.elements.emailForm().clear();
        this.elements.emailForm().type(email, { log: false });
    }
    enterPassword(password) {
        this.elements.passwordForm().should('be.visible');
        this.elements.passwordForm().clear();
        this.elements.passwordForm().type(password, { log: false });
    }
    checkTermsBox() {
        this.elements.termsChkbx().should('be.visible');
        this.elements.termsChkbx().click();
    }
    clickSignUpButton() {
        this.elements.signupBtn().should('be.visible');
        this.elements.signupBtn().click();
    }
}
export default SignupPage;