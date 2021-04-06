
import { tasksCategories } from './taskscategories';

import { AddTaskForm } from './addtaskform';
import { TaskList } from './tasklist';
import { TaskBox } from './taskbox';
import { Task } from './task';


export class ToDoListApp {

    constructor(parentElement,) {
        this.parentElement = parentElement;
        this.tasksBoxes = [];
        // this.tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        if(JSON.parse(localStorage.getItem('tasks')) === null) {
            this.tasks = [];
        } else {
            this.tasks = JSON.parse(localStorage.getItem('tasks'));
        }

        console.log(this.tasks);

        this.init(this.parentElement);

        this.addTaskForm = new AddTaskForm(parentElement, this.tasksCategories);
        this.taskListElement = new TaskList(parentElement);

        this.createTasksBoxes(this.tasksCategories);

        this.renderTasksBoxes();

        document.addEventListener('click', (e) => {
            if (e.target === this.addTaskForm.taskSubmit) {
                this.addTask(this.addTaskForm.taskInput.value, this.addTaskForm.categorySelection.value);
            }

            this.tasks.forEach((task) => {
                if (e.target === task.deleteTaskElement) {
                    e.preventDefault();
                    task.taskElement.remove();
                    console.log(`task id = `, task.id);
                    this.deleteTaskFromStorage(task.id);
                }
            });
        });
    }

    init(targetElement) {
        this.createAppWrapper(targetElement);
        this.loadTasksCategories(tasksCategories)
    };

    createAppWrapper(targetElement) {
        this.appWrapper = document.createElement('div');
        this.appWrapper.classList.add("app-wrapper");
        targetElement.append(this.appWrapper);
    }

    loadTasksCategories(tasksCategories) {
        this.tasksCategories = tasksCategories;
    }

    createTasksBoxes(categories) {
        categories.forEach(element => {
            this.tasksBoxes = [...this.tasksBoxes, new TaskBox(element.id, element.title, this.taskListElement.taskListElement)];
        });
    }

    renderTasksBoxes() {
        this.tasksBoxes.forEach(taskBox => {
            let currentTaskList = this.tasks.filter(task => task.category === taskBox.category);
            currentTaskList.forEach(task => {
                this.tasks = [...this.tasks, new Task(task.id, task.title, task.category, task.status, taskBox.listElement)];
            });
        });
        this.updateLocalStorage();
    }

    addTask(task, category) {
        if (task.length < 5) {
            alert(`Enter minimum 5 symbols`);
            return;
        } else {
            let newId = Date.now() + Math.round(100 * Math.random());
            this.tasks = [...this.tasks, new Task(newId, task, category, 0, this.tasksBoxes[category].listElement)];
        }
        this.addTaskForm.taskInput.value = '';
        this.updateLocalStorage();
    }

    deleteTaskFromStorage(taskId) {
        this.tasks = this.tasks.filter((task) => {
            console.log(task.id !== taskId);
            let flag = task.id !== taskId;
            return flag;
        });
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        
        console.log(`update storage`);
        localStorage.removeItem('tasks');
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}