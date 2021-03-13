export class AddTaskForm {
    constructor(appElement) {
        this.init(appElement);
    }

    init(appElement) {
        this.createInput(appElement);
        this.createSubmitButton(appElement);
    }

    createInput(appElement) {
        this.taskInput = document.createElement("input");
        this.taskInput.type = "text";
        this.taskInput.placeholder = "add task";
        appElement.append(this.taskInput);
    }

    createSubmitButton(appElement) {
        this.taskSubmit = document.createElement("button");
        this.taskSubmit.type = "submit";
        this.taskSubmit.textContent = "add task";
        appElement.append(this.taskSubmit);
    }
}