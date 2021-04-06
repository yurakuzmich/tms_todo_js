import { tasks } from './mocktasks';
import { tasksCategories } from './taskscategories';

import { AddTaskForm } from './addtaskform';
import { TaskList } from './tasklist';
import { TaskBox } from './taskbox';
import { Task } from './task';


export class ToDoListApp {

    constructor(parentElement,) {
        this.parentElement = parentElement;
        this.tasksBoxes = [];
        this.tasks = [];
        this.init(this.parentElement);

        this.addTaskForm = new AddTaskForm(parentElement, this.tasksCategories);
        this.taskListElement = new TaskList(parentElement);

        this.renderCategories();

        this.createTasksBoxes(this.tasksCategories);

        this.renderTasksBoxes();

        document.addEventListener('click', (e) => {
            if(e.target === this.addTaskForm.taskSubmit) {
                this.addTask(this.addTaskForm.taskInput.value, this.addTaskForm.categorySelection.value);
            }

            this.tasks.forEach((task) => {
                if(e.target === task.deleteTaskElement) {
                    e.preventDefault();
                    console.log(`Cross clicked`);
                    task.taskElement.remove();
                }
            });
        });
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
        this.tasksBoxes.forEach(taskBox => {
            let currentTaskList = this.taskList.filter(task => task.category === taskBox.category);
            currentTaskList.forEach(task => {
                this.tasks = [...this.tasks, new Task(task.id, task.title, task.category, task.status, taskBox.listElement, this.deleteTask)];
            });
        });
    }

    addTask(task, category) {
        if (task.length < 5) {
            alert(`Enter minimum 5 symbols`);
        } else {
            let newId = Date.now() + Math.round(100 * Math.random());
            this.tasks = [...this.tasks, new Task(newId, task, 0, category, this.tasksBoxes[category].listElement)];
        }
        this.addTaskForm.taskInput.value = '';
    }

    deleteTask(e, taskId, domElement ) {
        e.preventDefault();
        domElement.remove();
        console.log(this);
    }

    updateLocalStorage() {
            localStorage.setItem('tasks', this.tasks);
    }
}