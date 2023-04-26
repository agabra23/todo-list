export const displayController = (() => {
  const render = (listArr, todoList) => {
    console.log("working");
    const taskWrapper = document.getElementById("content");
    taskWrapper.innerHTML = "";
    const listContainers = document.querySelectorAll(".list-container");

    todoList.tasks.forEach((task, i) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task-container");
      const checkboxInput = document.createElement("input");
      checkboxInput.setAttribute("type", "checkbox");
      const id = `task${i + 1}`;
      checkboxInput.setAttribute("id", id);

      if (task.completed) checkboxInput.checked = true;

      const contents = document.createElement("div");
      contents.classList.add("task-contents");
      const customCheckbox = document.createElement("span");
      customCheckbox.classList.add("custom-checkbox");
      contents.innerHTML = `<label for="${id}"><span class="custom-checkbox"></span></label><span class="priority-marks" id="priority${i}">${task.priority}</span><span class="editable-title"  id="title${i}" contenteditable=true>${task.title}</span>`;

      const btnsDiv = document.createElement("div");
      btnsDiv.classList.add("btns-div");

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "";
      deleteBtn.dataset.index = i;
      deleteBtn.setAttribute.id = `deleteBtn${deleteBtn.dataset.index}`;
      console.log(deleteBtn.dataset.index);

      const deleteLabel = document.createElement("label");
      deleteLabel.setAttribute("for", deleteBtn.id);
      deleteLabel.classList.add("delete-label");
      deleteLabel.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 25px" viewBox="0 0 24 24"><title>trash-can-outline</title><path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;

      deleteBtn.style.display = "none";

      taskContainer.appendChild(checkboxInput);
      taskContainer.appendChild(contents);
      btnsDiv.appendChild(deleteBtn);
      btnsDiv.appendChild(deleteLabel);
      taskContainer.appendChild(btnsDiv);
      taskWrapper.appendChild(taskContainer);

      const editableTitle = document.getElementById(`title${i}`);
      editableTitle.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          console.log("Enter");
          event.preventDefault();
          editableTitle.blur();
        }
      });
      editableTitle.addEventListener("blur", () => {
        task.title = editableTitle.textContent;
      });

      const prioritySpan = document.getElementById(`priority${i}`);
      if (prioritySpan.textContent === "") {
        prioritySpan.classList.add("priority-no-margin");
      }

      if (task.completed) {
        customCheckbox.classList.add("completed");
      }

      deleteLabel.addEventListener("click", (e) => {
        console.log("label click");
        deleteBtn.click();
      });

      customCheckbox.addEventListener("click", () => {
        checkboxInput.checked = !checkboxInput.checked;
      });

      checkboxInput.addEventListener("click", (e) => {
        task.toggleCompleted();
        e.stopPropagation();
      });

      deleteBtn.addEventListener("click", (e) => {
        task.parentList.deleteTask(task);
        listArr[0].deleteTask(task);
        e.stopPropagation();
        displayController.render.bind(this)(listArr, todoList);
      });
    });

    listContainers.forEach((container) => {
      container.innerHTML = "";

      const listWrapper = document.createElement("div");
      listWrapper.dataset.index = 0;
      const listTitle = document.createElement("h4");
      listWrapper.classList.add("list-item");
      listWrapper.classList.add("all-tasks-list");
      listWrapper.dataset.index = 0;
      if (listArr[0].active) listWrapper.classList.add("active");
      listTitle.classList.add("list-item-title");
      listTitle.setAttribute.id = `listItemTitle0`;

      listWrapper.appendChild(listTitle);
      container.appendChild(listWrapper);

      listTitle.textContent = "All Tasks";

      const addWrapper = document.createElement("div");
      addWrapper.dataset.index = 0;
      const addTitle = document.createElement("h4");
      addWrapper.classList.add("add-list-container");
      addWrapper.dataset.index = 0;
      addTitle.classList.add("list-item-title");
      addTitle.setAttribute.id = `listItemTitle0`;
      const plusSignDiv = document.createElement("div");
      plusSignDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style="width: 25px" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
      plusSignDiv.classList.add("plus-sign-div");

      addWrapper.appendChild(addTitle);
      addWrapper.appendChild(plusSignDiv);
      container.appendChild(addWrapper);

      addTitle.textContent = "Add List";

      listArr.slice(1).forEach((list, i) => {
        const listWrapper = document.createElement("div");
        listWrapper.dataset.index = i + 1;
        const listTitle = document.createElement("h4");
        const pencilDiv = document.createElement("div");
        const trashDiv = document.createElement("div");
        pencilDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" style="width: 25px" viewBox="0 0 24 24"><title>pencil-outline</title><path d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" /></svg>`;
        trashDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 25px" viewBox="0 0 24 24"><title>trash-can-outline</title><path fill="currentColor" d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>`;
        listWrapper.classList.add("list-item");
        if (list.active) listWrapper.classList.add("active");
        listTitle.classList.add("list-item-title");
        listTitle.setAttribute.id = `listItemTitle${i + 1}`;
        pencilDiv.classList.add("nav-pencil-div");
        trashDiv.classList.add("nav-trash-div");

        listWrapper.appendChild(listTitle);
        listWrapper.appendChild(pencilDiv);
        listWrapper.appendChild(trashDiv);
        container.appendChild(listWrapper);

        listTitle.textContent = list.title;
      });

      const pencils = document.querySelectorAll(".nav-pencil-div");
      pencils.forEach((pencil) => {
        pencil.addEventListener("click", (e) => {
          e.stopPropagation();
          console.log(`Edit this list`);

          const currentTitle = pencil.previousElementSibling;
          currentTitle.setAttribute("contenteditable", true);
          currentTitle.addEventListener("focus", () => {
            const range = document.createRange();
            const selection = window.getSelection();
            range.setStart(currentTitle, currentTitle.childNodes.length);
            range.setEnd(currentTitle, currentTitle.childNodes.length);
            selection.removeAllRanges();
            selection.addRange(range);
          });
          currentTitle.focus();
          currentTitle.addEventListener("blur", () => {
            currentTitle.setAttribute("contenteditable", false);
            const headerTitle = document.getElementById("listTitle");
            if (currentTitle != null) {
              if (currentTitle.parentNode.classList.contains("active"))
                headerTitle.textContent = currentTitle.textContent;

              listArr[currentTitle.parentElement.dataset.index].title =
                currentTitle.textContent;
            }
          });

          currentTitle.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              currentTitle.blur();
            }
          });
        });
      });
    });

    const trashCans = document.querySelectorAll(".nav-trash-div");
    trashCans.forEach((trashCan) => {
      trashCan.addEventListener("click", (e) => {
        let i = trashCan.parentElement.dataset.index;
        listArr[i].tasks.forEach((task) => {
          listArr[i].deleteTask(task);
          listArr[0].deleteTask(task);
        });
        listArr.splice(i, 1);
        trashCans[0].parentElement.classList.add("active");
        listArr.forEach((list) => {
          list.active = false;
        });
        listArr[0].active = true;
        const headerTitle = document.getElementById("listTitle");
        headerTitle.textContent = "All Tasks";
        displayController.render.bind(this)(listArr, listArr[0]);
        e.stopPropagation();
      });
    });

    const listItems = document.querySelectorAll(".list-item");
    listItems.forEach((listItem) => {
      listItem.addEventListener("click", () => {
        listItems.forEach((item) => {
          item.classList.remove("active");

          listArr[item.dataset.index].active = false;
        });

        listItem.classList.add("active");
        listArr[listItem.dataset.index].active = true;

        displayController.render.bind(this)(
          listArr,
          listArr[listItem.dataset.index]
        );

        const headerTitle = document.getElementById("listTitle");
        const listItemContainer = document.querySelector(".list-item.active");
        const listItemTitle = listItemContainer.children[0];

        if (listItemTitle != null)
          headerTitle.textContent = listItemTitle.textContent;
      });
    });

    const addListBtns = document.querySelectorAll(".add-list-container");
    addListBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const addListModal = document.getElementById("addListModal");
        addListModal.classList.toggle("active");
      });
    });

    
  };

  return {
    render,
  };
})();
