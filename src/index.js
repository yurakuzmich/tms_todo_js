import salary from './assets/images/salary.png';
import './assets/styles/main.scss';
import {tasks} from './assets/js/mocktasks';
import { ToDoListApp } from './assets/js/todolistApp';


import {testFunc} from './assets/js/main';

const rootElement = document.querySelector("#root");


let myApp = new ToDoListApp(rootElement);