export class TaskBox {
    constructor(category, title, parentElement) {
        this.category = category;
        this.title = title
        this.init(parentElement);
    }

    init(parentElement) {
        this.taskBoxElement = document.createElement('div');
        this.taskBoxElement.innerHTML = `<h2>${this.title}</h2>`;
        parentElement.append(this.taskBoxElement);

        this.listElement = document.createElement('ul');
        this.taskBoxElement.append(this.listElement);
    }
}