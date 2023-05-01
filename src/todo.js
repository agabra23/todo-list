class Task {
  constructor(
    title = "",
    description = "",
    dueDate = "",
    priority = ""
    // parentList = undefined
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
    // this.parentList = parentList;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}

class List {
  constructor(title = "", active = false) {
    this.tasks = [];
    this.title = title;
    this.active = active;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  containsTask(task) {
    let index = this.tasks.indexOf(task);
    return index !== -1;
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    if (index != -1) this.tasks.splice(index, 1);
  }
}

export { List, Task };
