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
        this.taskElement.style.alignItems = 'center';
        this.taskElement.style.justifyContent = 'space-between';

        this.checkBoxTaskElement = document.createElement('input');
        this.checkBoxTaskElement.type = 'checkbox';
        this.checkBoxTaskElement.style.display = 'block';
        this.taskElement.append(this.checkBoxTaskElement);

        this.textElement = document.createElement('p');
        this.textElement.textContent = `${this.title}`;
        this.taskElement.append(this.textElement);
        
        this.editTaskElement = document.createElement('a');
        this.editTaskElement.href = '';
        this.editTaskElement.textContent = '[Edit]';
        this.taskElement.append(this.editTaskElement);

        this.deleteTaskElement = document.createElement('a');
        this.deleteTaskElement.href = '';
        this.deleteTaskElement.textContent = '[X]';
        this.taskElement.append(this.deleteTaskElement);

        parentElement.append(this.taskElement);
    }
}