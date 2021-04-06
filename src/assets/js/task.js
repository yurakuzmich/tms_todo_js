export class Task {
    constructor(id, title, category, status, parentElement) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.status = status;
        this.parentElement = parentElement;

        this.init(this.parentElement);
    }

    init(parentElement) {
        this.taskElement = document.createElement('li');
        this.taskElement.style.display = 'flex';
        this.taskElement.style.justifyContent = 'space-between';
        this.taskElement.textContent = `${this.title}`;
        
        this.editTaskElement = document.createElement('a');
        this.editTaskElement.href = '';
        this.editTaskElement.textContent = '[E]';
        this.taskElement.append(this.editTaskElement);

        this.deleteTaskElement = document.createElement('a');
        this.deleteTaskElement.href = '';
        this.deleteTaskElement.textContent = '[X]';
        this.taskElement.append(this.deleteTaskElement);

        parentElement.append(this.taskElement);
    }
}