import "./styles/style.css";
import { List, Task } from "./todo.js";
import { displayController } from "./displayController.js";

const allTasksList = new List("All Tasks", true);

let listArr = [allTasksList];

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
  console.log(dueMonth);
  let priorityValue = "";
  priorityBtns.forEach((btn) => {
    if (btn.classList.contains("active")) priorityValue = btn.textContent;
  });

  return new Task(
    taskName,
    taskDescription,
    `${dueYear}-${dueMonth}-${dueDay}`,
    priorityValue,
    false
  );
};

function addList(list) {
  listArr.push(list);
}

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
    task.parentList = list;
    if (list !== allTasksList) {
      allTasksList.addTask(task);
    }
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

const addListCancelBtn = document.querySelector(".list-cancel-btn");
addListCancelBtn.addEventListener("click", () => {
  const addListForm = document.getElementById("addListForm");
  const addListModal = document.getElementById("addListModal");
  addListForm.reset();
  addListModal.classList.toggle("active");
});

const modalSubmitBtn = document.getElementById("listAddBtn");
modalSubmitBtn.onclick = (e) => {
  e.preventDefault();
  const addListModal = document.getElementById("addListModal");
  const addListForm = document.getElementById("addListForm");
  const addListInput = document.getElementById("addListInput");

  let tempTitle = addListInput.value;
  console.log(addListInput);
  console.log(`title: ${tempTitle}`);
  listArr.forEach((list) => {
    if (list != listArr[0]) {
      list.active = false;
    }
  });
  const newList = new List(tempTitle, false);
  addList(newList);
  addListModal.classList.toggle("active");
  displayController.render(listArr, newList);
  addListForm.reset();
};
