import NonLoggedMenuBar from "../pageobjects/menuBar/nonLoggedMenuBar"
import SignupPage from "../pageobjects/todoSignupPage"
import MyTasksPage from "../pageobjects/todoMyTasksPage";

const { internet, name } = require('faker');
const firstName = name.firstName();
const email = internet.exampleEmail();
const password = internet.password();

describe('Signup page tests', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('User should be able to create new credentials', () => {
        const menuBar = new NonLoggedMenuBar();
        const signupPage = new SignupPage();
        const tasksPage = new MyTasksPage();
        
        menuBar.clickSignupLink();
        signupPage.enterName(firstName);
        signupPage.enterEmail(email);
        signupPage.enterPassword(password);
        signupPage.checkTermsBox();
        signupPage.clickSignUpButton();
        cy.url().should('include', tasksPage.elements.myTasksUrl);
        cy.contains('add a task');
    })

})