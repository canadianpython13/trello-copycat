/// <reference types="cypress" />

class MyTasksPage {

    elements = {
        myTasksUrl: '/tasks/my_tasks',
        tasksDropdown : () =>
            cy.get(':nth-child(1) > #navbarDropdownPages'),
        addTaskDropdownLnk : () =>
            cy.get('div[class="dropdown-menu dropdown-menu-right show"] a[href="/tasks/add_task"]'),
        myTasksDropdownLnk : () =>
            cy.get('div[class="dropdown-menu dropdown-menu-right show"] a[href="/tasks/my_tasks"]'),
        nameDropdown : () =>
            cy.get(':nth-child(2) > #navbarDropdownPages'),
        taskTxtbox : () =>
            cy.get('#task'),
        saveTaskbtn : () =>
            cy.get('#submit'),
        deleteTaskbtn : () =>
            cy.get('.btn-outline-danger'),
        editTaskbtn : () =>
            cy.get('.btn-outline-secondary'),
        viewTaskbtn : () =>
            cy.get('.btn-outline-primary'), 
        taskCardtxt : () =>
            cy.get('.card-text')
    }

    addTaskViaMenu(task) {
        this.elements.tasksDropdown().click();
        this.elements.addTaskDropdownLnk().click({force: true });
        this.elements.taskTxtbox().type(task);
        this.elements.saveTaskbtn().click();
    }
    deleteTask() {
        this.elements.deleteTaskbtn().click();
    }
    updateTask(updatedTask, task) {
        this.elements.editTaskbtn().click();
        this.elements.taskTxtbox().clear().type(updatedTask);
        this.elements.saveTaskbtn().click();
        cy.should('not.contain', task);
    }
    viewTask(task) {
        this.elements.viewTaskbtn().click();
        this.elements.taskCardtxt().should('contain.text', task);
    }
    clearAllTasks() {
        cy.get('tbody tr td').then(($tableRows) => {
            if ($tableRows.text().includes('No Task Added. Please ')) return
                cy.get('.btn-outline-danger').first().click();
                this.clearAllTasks();
        })
    }
    leaveOneTask() {
        cy.get('.btn-outline-danger').then(($deleteButton) => {
            if ($deleteButton.length === 1) return
                cy.get('.btn-outline-danger').first().click();
                this.leaveOneTask();
        })
    }
    addMultipleTasks(numTasks, task) {
        for (let i = 0; i < numTasks; i++) {
            this.elements.tasksDropdown().click();
            this.elements.addTaskDropdownLnk().click({force: true });
            this.elements.taskTxtbox().type(task);
            this.elements.saveTaskbtn().click();
        } 
    }
}
export default MyTasksPage;