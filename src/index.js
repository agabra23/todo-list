import { List, Task } from "./todo.js";

const list = new List();
const hamburgerMenu = document.getElementById("hamburgerMenu");
const mobileNav = document.getElementById("mobileNav");

hamburgerMenu.onclick = () => {
  hamburgerMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
};

const task1 = new Task(
  "Get Groceries",
  "Get groceries at Stop and Shop",
  "Today",
  3
);

list.addTask(task1);
console.log(list.tasks);
