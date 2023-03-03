/// <reference types="cypress" />

class LoggedMenuBar {

    elements = {
        tasksLnk : () =>
            cy.get(':nth-child(1) > #navbarDropdownPages'),
        nameLink : () =>
            cy.get(':nth-child(2) > #navbarDropdownPages')
    }
}
export default LoggedMenuBar;