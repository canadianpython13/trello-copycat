/// <reference types="cypress" />

class LoginPage {

    elements = {
        emailLbl : () =>
            cy.get('div[class="form-group "] label[for="login"]'),
        emailForm : () =>
            cy.get('#login'),
        passwordLbl : () =>
            cy.get('div[class="form-group "] label[for="password"]'),
        passwordForm : () =>
            cy.get('#password'),
        rememberMeChkbx : () =>
            cy.get('#remember'),
        loginBtn : () =>
            cy.get('#submit')
    }

    enterEmail(email) {
        this.elements.emailForm().clear();
        this.elements.emailForm().type(email, { log: false });
    }
    enterPassword(password) {
        this.elements.passwordForm().clear();
        this.elements.passwordForm().type(password, { log: false });
    }
    clickSignInButton() {
        this.elements.loginBtn().click();
    }
}
export default LoginPage;