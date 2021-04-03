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
        this.taskElement.innerHTML = `<div>${this.title}</div><div><a href="">edit</a></div><div><a href="">X</a></div>`;
        parentElement.append(this.taskElement);
    }
}