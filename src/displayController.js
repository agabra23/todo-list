export const displayController = (() => {
  const render = (todoList) => {
    console.log("working");
    const taskWrapper = document.getElementById("content");
    taskWrapper.innerHTML = "";
    todoList.tasks.forEach((task, index) => {
      const taskContainer = document.createElement("div");
      taskContainer.classList.add("task-container");
      const checkboxInput = document.createElement("input");
      checkboxInput.setAttribute("type", "checkbox");
      const id = `task${index + 1}`;
      checkboxInput.setAttribute("id", id);

      if (task.completed) checkboxInput.checked = true;

      const label = document.createElement("label");
      label.setAttribute("for", id);
      const customCheckbox = document.createElement("span");
      customCheckbox.classList.add("custom-checkbox");
      label.innerHTML = `<span class="custom-checkbox"></span>${task.title}`;

      taskWrapper.appendChild(taskContainer);
      taskContainer.appendChild(checkboxInput);
      taskContainer.appendChild(label);

      if (task.completed) {
        customCheckbox.classList.add("completed");
      }

      checkboxInput.addEventListener("click", (e) => {
        task.toggleCompleted();
        e.stopPropagation();
      });
    });
  };

  return {
    render,
  };
})();
