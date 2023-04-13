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
        todoList.deleteTask(task);
        e.stopPropagation();
        displayController.render.bind(this)(todoList);
      });
    });

    listContainers.forEach((container) => {
      listArr.forEach((list, i) => {
        const listWrapper = document.createElement("div");
        listWrapper.dataset.index = i;
        const listTitle = document.createElement("h4");
        const gearDiv = document.createElement("div");
        gearDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" style="width: 25px" fill="currentColor" viewBox="0 0 24 24"><title>cog-outline</title><path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" /></svg>`;
        listWrapper.classList.add("list-item");
        listTitle.classList.add("list-item-title");
        gearDiv.classList.add("nav-gear-div");

        listWrapper.appendChild(listTitle);
        listWrapper.appendChild(gearDiv);
        container.appendChild(listWrapper);

        listTitle.textContent = list.title;
      });
    });

    const listItems = document.querySelectorAll(".list-item");
    listItems.forEach((listItem) => {
      listItem.onclick = () => {
        listItems.forEach((item) => {
          item.classList.remove("active");
        });

        listItem.classList.add("active");
      };
    });
  };

  return {
    render,
  };
})();
