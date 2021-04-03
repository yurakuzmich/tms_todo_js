export class AddTaskForm {
    constructor(appElement, tasksCategories) {
        this.init(appElement, tasksCategories);
        console.log(tasksCategories);
    }

    init(appElement, tasksCategories) {
        this.createInput(appElement);
        this.createCategorySelection(appElement, tasksCategories);
        this.createSubmitButton(appElement);
    }

    createInput(appElement) {
        this.taskInput = document.createElement('input');
        this.taskInput.type = 'text';
        this.taskInput.placeholder = "add task";
        appElement.append(this.taskInput);
    }

    createCategorySelection(appElement, tasksCategories) {
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

        appElement.append(this.categorySelection);
    }

    createSubmitButton(appElement) {
        this.taskSubmit = document.createElement('button');
        this.taskSubmit.type = 'submit';
        this.taskSubmit.textContent = 'add task';
        appElement.append(this.taskSubmit);
    }
}