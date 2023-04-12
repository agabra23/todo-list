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

      const label = document.createElement("label");
      label.setAttribute("for", id);
      const customCheckbox = document.createElement("span");
      customCheckbox.classList.add("custom-checkbox");
      label.innerHTML = `<span class="custom-checkbox"></span><span class="priority-marks">${task.priority}</span>${task.title}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");
      deleteBtn.textContent = "Delete";
      deleteBtn.dataset.index = i;
      deleteBtn.setAttribute.id = `deleteBtn${deleteBtn.dataset.index}`;
      console.log(deleteBtn.dataset.index);

      taskWrapper.appendChild(taskContainer);
      taskContainer.appendChild(checkboxInput);
      taskContainer.appendChild(label);
      taskContainer.appendChild(deleteBtn);

      if (task.completed) {
        customCheckbox.classList.add("completed");
      }

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
