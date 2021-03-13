import { tasks } from './mocktasks';
import { tasksCategories } from './taskscategories';

import { AddTaskForm } from './addtaskform';
import { TaskList } from './tasklist';
import { TaskBox } from './taskbox';


export class ToDoListApp {

    constructor(parentElement,) {
        this.parentElement = parentElement;
        this.tasksBoxes = [];
        this.tasks = [];
        this.init(this.parentElement);

        this.addTaskForm = new AddTaskForm(parentElement);
        this.taskListElement = new TaskList(parentElement);

        this.renderCategories();
        this.createTasksBoxes(this.tasksCategories);

        this.renderTasksBoxes();
    }

    init(targetElement) {
        this.createAppWrapper(targetElement);
        this.loadTasksCategories(tasksCategories)
        this.loadTasks(tasks);
    };

    createAppWrapper(targetElement) {
        this.appWrapper = document.createElement('div');
        this.appWrapper.classList.add("app-wrapper");
        targetElement.append(this.appWrapper);
    }

    loadTasks(tasklist) {
        this.taskList = tasklist;
    }

    loadTasksCategories(tasksCategories) {
        this.tasksCategories = tasksCategories;
    }

    renderCategories() {
        this.tasksCategories.forEach(category => {
            console.log(category.id + ':' + category.title);
        });
    }

    createTasksBoxes(categories) {
        categories.forEach(element => {
            this.tasksBoxes = [...this.tasksBoxes, new TaskBox(element.id, element.title, this.taskListElement.taskListElement)];
        });
    }

    renderTasksBoxes() {
        this.tasksBoxes.forEach(
            taskBox => {
                this.renderTasks(taskBox.category);
            }
        )
    }

    createTasks(taskList) {
        // taskList.forEach/
    }

    renderTasks(category) {
        let tasks = this.taskList.filter(task => task.category === category);
        console.log(`Category: ${category}`);
        tasks.forEach(task => {
            console.log(task);
        });
    }
}