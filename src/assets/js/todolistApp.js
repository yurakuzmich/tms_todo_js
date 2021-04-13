import { tasksCategories } from "./taskscategories";

import { AddTaskForm } from "./addtaskform";
import { TaskList } from "./tasklist";
import { TaskBox } from "./taskbox";
import { Task } from "./task";

export class ToDoListApp {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.tasksBoxes = [];
    this.tasks = [];

    this.init(this.parentElement);

    this.addTaskForm = new AddTaskForm(parentElement, this.tasksCategories);
    this.taskListElement = new TaskList(parentElement);

    this.createTasksBoxes(this.tasksCategories);

    this.renderTasksBoxes();

    document.addEventListener("click", (e) => {
      if (e.target === this.addTaskForm.taskSubmit) {
        this.addTask(
          this.addTaskForm.taskInput.value,
          this.addTaskForm.categorySelection.value
        );
      }

      this.tasks.forEach((task) => {
        if (e.target === task.deleteTaskElement) {
          e.preventDefault();
          task.taskElement.remove();
          this.deleteTaskFromStorage(task.id);
        }

        if (e.target === task.editTaskElement) {
          e.preventDefault();
          if (task.editTaskElement.textContent === "Save") {
            this.saveEditedTAsk(task.id, task.textElement.textContent);
            task.textElement.contentEditable = "false";
            task.editTaskElement.textContent = "[Edit]";
            task.textElement.style.border = "none";
          } else {
            task.textElement.contentEditable = "true";
            task.editTaskElement.textContent = "Save";
            task.textElement.style.border = "1px solid gray";
          }
        }
      });
    });
  }

  init(targetElement) {
    this.createAppWrapper(targetElement);
    this.loadTasksCategories(tasksCategories);
  }

  createAppWrapper(targetElement) {
    this.appWrapper = document.createElement("div");
    this.appWrapper.classList.add("app-wrapper");
    targetElement.append(this.appWrapper);
  }

  loadTasksCategories(tasksCategories) {
    this.tasksCategories = tasksCategories;
  }

  createTasksBoxes(categories) {
    categories.forEach((element) => {
      this.tasksBoxes = [
        ...this.tasksBoxes,
        new TaskBox(
          element.id,
          element.title,
          element.style,
          this.taskListElement.taskListElement
        ),
      ];
    });
  }

  renderTasksBoxes() {
    this.tasksBoxes.forEach((taskBox) => {
      let currentTaskList = this.tasks.filter(
        (task) => task.category === taskBox.category
      );
      currentTaskList.forEach((task) => {
        this.tasks = [
          ...this.tasks,
          new Task(
            task.id,
            task.title,
            task.category,
            task.status,
            taskBox.listElement
          ),
        ];
      });
    });
  }

  addTask(task, category) {
    if (task.length < 5) {
      alert(`Enter minimum 5 symbols`);
      return;
    } else {
      let newId = Date.now() + Math.round(100 * Math.random());
      this.tasks = [
        ...this.tasks,
        new Task(
          newId,
          task,
          category,
          0,
          this.tasksBoxes[category].listElement
        ),
      ];
    }
    this.addTaskForm.taskInput.value = "";
  }

  saveEditedTAsk(taskId, taskTitle) {
    const taskIndex = this.tasks.findIndex((element) => element.id === taskId);
    this.tasks[taskIndex].title = taskTitle;
    console.log(this.tasks);
  }

  deleteTaskFromStorage(taskId) {
    this.tasks = this.tasks.filter((task) => {
      let flag = task.id !== taskId;
      return flag;
    });
  }
}
