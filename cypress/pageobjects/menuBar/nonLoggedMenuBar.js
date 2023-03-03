/// <reference types="cypress" />

class NonLoggedMenuBar {

    elements = {
        signUplnk : () =>
            cy.get(':nth-child(1) > .nav-link'),
        loginLnk : () =>
            cy.get(':nth-child(2) > .nav-link'),
        calendarLnk : () =>
            cy.get(':nth-child(3) > .nav-link'),
        integrationLnk : () =>
            cy.get(':nth-child(4) > .nav-link'),
        faqLnk : () =>
            cy.get(':nth-child(5) > .nav-link')
    }

    clickSignupLink() {
        this.elements.signUplnk().click();
    }
    clickLoginLink() {
        this.elements.loginLnk().click();
    }
}
export default NonLoggedMenuBar;