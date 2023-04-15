class Task {
  constructor(title = "", description = "", dueDate = "", priority = "") {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
    console.log(this.completed);
  }
}

class List {
  constructor(title = "", active = false) {
    this.tasks = [];
    this.title = title;
    this.active = this.active;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(task) {
    let index = this.tasks.indexOf(task);
    if (index != -1) this.tasks.splice(index, 1);
    console.log(this.tasks);
  }
}

export { List, Task };
