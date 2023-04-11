import "./src/styles/style.css";
import { List, Task } from "./todo.js";
import { displayController } from "./displayController.js";

const todoList = new List();

// Sidebar Nav Logic

const hamburgerMenu = document.getElementById("hamburgerMenu");
const mobileNav = document.getElementById("mobileNav");

hamburgerMenu.onclick = () => {
  hamburgerMenu.classList.toggle("open");
  mobileNav.classList.toggle("open");
};

// Add Button Logic

const addBtn = document.getElementById("addBtn");
const addModal = document.getElementById("addModal");
const addForm = document.getElementById("addform");
const closeAddModalBtn = document.getElementById("closeAddModal");

closeAddModalBtn.onclick = () => {
  closeAddModal();
};

addBtn.onclick = () => {
  addBtn.classList.toggle("open");
  addModal.classList.toggle("open");
};

const priorityBtns = document.querySelectorAll(".priority-btn");
priorityBtns.forEach((btn) => {
  btn.onclick = () => {
    let active = btn.classList.contains("active");
    priorityBtns.forEach((button) => {
      button.classList.remove("active");
    });
    if (active == false) btn.classList.add("active");
  };
});

const getFormTask = () => {
  const taskName = document.getElementById("taskName").value;
  const taskDescription = document.getElementById("taskDescription").value;
  const dueMonth = document.getElementById("dueDateMonth").value;
  const dueDay = document.getElementById("dueDateDay").value;
  const dueYear = document.getElementById("dueDateYear").value;

  let priorityValue = "None";
  priorityBtns.forEach((btn) => {
    if (btn.classList.contains("active")) priorityValue = btn.textContent;
  });

  return new Task(
    taskName,
    taskDescription,
    `${dueMonth}/${dueDay}/${dueYear}`,
    priorityValue,
    false
  );
};

function closeAddModal() {
  addBtn.classList.toggle("open");
  addModal.classList.toggle("open");
  resetForm();
}

function resetForm() {
  priorityBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  const inputs = document.querySelectorAll("input");
  inputs.forEach((element) => {
    element.value = "";
  });
}

function createTask() {
  let task = getFormTask();
  todoList.addTask(task);
  console.log(todoList.tasks);
  closeAddModal();
  displayController.render(todoList);
}

const addSubmitBtn = document.getElementById("addSubmit");
addSubmitBtn.onclick = (e) => {
  e.preventDefault();
  createTask();
};
