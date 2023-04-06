import { List, Task } from "./todo.js";

const list = new List();

const task1 = new Task(
  "Get Groceries",
  "Get groceries at Stop and Shop",
  "Today",
  3
);

list.addTask(task1);
console.log(list.tasks);
