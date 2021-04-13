export class AddTaskForm {
    constructor(appElement, tasksCategories) {
        this.formElement = document.createElement('div');
        this.formElement.classList.add('task-form');

        this.init(appElement, this.formElement, tasksCategories);
    }

    init(appElement, formElement, tasksCategories) {
        this.createInput(formElement);
        this.createCategorySelection(formElement, tasksCategories);
        this.createSubmitButton(formElement);
        this.appendFormToApp(appElement);
    }

    createInput(formElement) {
        this.taskInput = document.createElement('input');
        this.taskInput.type = 'text';
        this.taskInput.placeholder = "add task";
        formElement.append(this.taskInput);
    }

    createCategorySelection(formElement, tasksCategories) {
        this.categorySelection = document.createElement('select');
        let optionElements = tasksCategories.map(category => {
            let option = document.createElement('option');
            option.value = category.id;
            option.textContent = category.title;
            return option;
        });

        optionElements.forEach(option => {
            this.categorySelection.append(option);
        });

        formElement.append(this.categorySelection);
    }

    createSubmitButton(formElement) {
        this.taskSubmit = document.createElement('button');
        this.taskSubmit.type = 'buton';
        this.taskSubmit.textContent = 'Add task';
        formElement.append(this.taskSubmit);
    }

    appendFormToApp(appElement) {
        appElement.append(this.formElement);
    }
}