class Task {
  constructor(title = "", description = "", dueDate = undefined, priority = 0) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

class List {
  constructor() {
    this.tasks = [];
    this.completedTasks = [];
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  completeTask(task) {
    let index = this.tasks.indexOf(task);
    if (index != -1) this.tasks.splice(index, 1);

    let completedIndex = this.completedTasks.indexOf(task);
    if (completedIndex === -1) this.completedTasks.push(task);
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    if (index != -1) this.tasks.splice(index, 1);

    let completedIndex = this.completedTasks.indexOf(task);
    if (completedIndex != -1) this.completedTasks.splice(completedIndex, 1);
  }
}

export { List, Task };
