export const displayController = (() => {
  const render = (todoList) => {
    console.log("working");
    const taskWrapper = document.getElementById("content");
    taskWrapper.innerHTML = "";
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
      contents.innerHTML = `<label for="${id}"><span class="custom-checkbox"></span></label><span class="priority-marks">${task.priority}</span><span class="editable-title" contenteditable=true> ${task.title}</span>`;

      // const editableTitle = document.querySelector(".editable-title");
      // editableTitle.addEventListener("keydown", (event) => {
      //   if (event.keyCode === 13) {
      //     event.preventDefault();
      //     title.blur();
      //   }
      // });
      // editableTitle.addEventListener("blur", () => {
      //   task.title = editableTitle.textContent;
      // });

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
  };

  return {
    render,
  };
})();
