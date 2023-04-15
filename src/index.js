import "./styles/style.css";
import { List, Task } from "./todo.js";
import { displayController } from "./displayController.js";

const todoList = new List("Todo");
const todoList2 = new List("Groceries");
const todoList3 = new List("Shopping");
const allTasksList = new List("All Tasks", true);
let listArr = [allTasksList, todoList, todoList2, todoList3];

displayController.render(listArr, allTasksList);

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

  let priorityValue = "";
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

function createTask(list) {
  let task = getFormTask();
  if (task.title != "") {
    list.addTask(task);
    allTasksList.addTask(task);
    console.log(list.tasks);
  }
  closeAddModal();
  displayController.render(listArr, list);
}

const addSubmitBtn = document.getElementById("addSubmit");
addSubmitBtn.onclick = (e) => {
  const selectedListItem = document.querySelector(".list-item.active");
  e.preventDefault();

  if (selectedListItem === null) {
    createTask(allTasksList);
  } else {
    createTask(listArr[selectedListItem.dataset.index]);
  }
};
