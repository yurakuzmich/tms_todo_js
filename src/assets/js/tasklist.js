export class TaskList {
    constructor(appElement) {
        this.init(appElement);
    }

    init(appElement) {
        this.createTaskList(appElement);
    }

    createTaskList(appElement) {
        this.taskListElement = document.createElement('div');
        this.taskListElement.classList.add('task-list', 'row');
        appElement.append(this.taskListElement);
    }

}