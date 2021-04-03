export class Task {
    constructor(id, title, category, status, parentElement, deleteMethod) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.status = status;
        this.parentElement = parentElement;
        this.deleteMethod = deleteMethod;

        this.init(this.parentElement);
    }

    init(parentElement) {
        this.taskElement = document.createElement('li');
        this.taskElement.style.display = 'flex';
        this.taskElement.style.justifyContent = 'space-between';
        this.taskElement.textContent = `${this.title}`;

        this.deleteTaskElement = document.createElement('a');
        this.deleteTaskElement.href = '';
        this.deleteTaskElement.textContent = '[X]';
        this.deleteTaskElement.onclick = (e) => this.deleteMethod(e, this.id, this.taskElement);
        this.taskElement.append(this.deleteTaskElement);

        parentElement.append(this.taskElement);
    }

    // removeTask(event, el) {
    //     event.preventDefault();
    //     el.remove();
    //     this.deleted = true;
    // }
}