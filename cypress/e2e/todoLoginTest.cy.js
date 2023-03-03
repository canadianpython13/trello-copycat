import MyTasksPage from "../pageobjects/todoMyTasksPage"
import NonLoggedMenuBar from "../pageobjects/menuBar/nonLoggedMenuBar"
import LoginPage from "../pageobjects/todoLoginPage"

describe('Login page tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('User should be able to log in', () => {
        
        const landingPage = new NonLoggedMenuBar();
        const loginPage = new LoginPage();
        const tasksPage = new MyTasksPage();
        const username = Cypress.env('username')
        const password = Cypress.env('password')

        landingPage.clickLoginLink();
        loginPage.enterEmail(username)
        loginPage.enterPassword(password)
        loginPage.clickSignInButton()
        cy.url().should('include', tasksPage.elements.myTasksUrl)

    })

})