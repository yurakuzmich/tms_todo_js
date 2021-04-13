export class TaskBox {
    constructor(category, title, style, parentElement) {
        this.category = category;
        this.title = title;
        this.style = style;
        this.init(parentElement);
    }

    init(parentElement) {
        this.taskBoxElement = document.createElement('div');
        this.taskBoxElement.classList.add('task-box', this.style, 'col-sm-4');
        this.taskBoxElement.innerHTML = `<h2>${this.title}</h2>`;
        parentElement.append(this.taskBoxElement);

        this.listElement = document.createElement('ul');
        this.taskBoxElement.append(this.listElement);
    }
}