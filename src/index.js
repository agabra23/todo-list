import { List, Task } from "./todo.js";

const list = new List();
const hamburgerMenu = document.getElementById("hamburgerMenu");

hamburgerMenu.onclick = () => {
  if (hamburgerMenu.classList.contains("open")) {
    hamburgerMenu.classList.remove("open");
  } else {
    hamburgerMenu.classList.add("open");
  }
};

const task1 = new Task(
  "Get Groceries",
  "Get groceries at Stop and Shop",
  "Today",
  3
);

list.addTask(task1);
console.log(list.tasks);
