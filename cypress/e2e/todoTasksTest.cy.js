import NonLoggedMenuBar from "../pageobjects/menuBar/nonLoggedMenuBar";
import LoginPage from "../pageobjects/todoLoginPage";
import MyTasksPage from "../pageobjects/todoMyTasksPage";

const { hacker } = require('faker');
const task = hacker.verb() + ' ' + hacker.noun();
const updatedTask = hacker.verb() + ' ' + hacker.noun();
const myTasksPage = new MyTasksPage();

describe('StackTodo tests', () => {

    beforeEach(() => {
        const loggedOutMenuBar = new NonLoggedMenuBar();
        const loginPage = new LoginPage();
        const username = Cypress.env('username');
        const password = Cypress.env('password');

        cy.visit('/')
        loggedOutMenuBar.clickLoginLink();
        loginPage.enterEmail(username);
        loginPage.enterPassword(password);
        loginPage.clickSignInButton();
        myTasksPage.clearAllTasks();
        myTasksPage.addTaskViaMenu(task);
    })

    it('User should be able to create and delete a task', () => {
        cy.contains(task);
        myTasksPage.deleteTask();
    })

    it('User should be able to update a task', () => {
        myTasksPage.updateTask(updatedTask);
    })

    it('User should be able to view their task', () => {
        myTasksPage.viewTask(task);
    })

    it('User should only have 1 task remaining', () => {
        const multiTask = hacker.verb() + ' ' + hacker.noun();
        const numTasks = Math.floor(Math.random() * 5) + 2;
        myTasksPage.addMultipleTasks(numTasks, multiTask);
        myTasksPage.leaveOneTask();
    })

})