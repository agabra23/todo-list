import { Task } from "./todo";
import { List } from "./todo";

export default class Storage {
  static saveListArr(data) {
    localStorage.setItem("listArr", JSON.stringify(data));
    console.log("saved");
    console.log(localStorage.getItem("listArr"));
  }

  static getListArr() {
    // init listArr from localStorage
    let listArr = JSON.parse(localStorage.getItem("listArr"));

    // take each listArr list and make it a new List() object
    let tempArr = listArr.slice();
    listArr = tempArr.map((list) => {
      const newList = new List(list.title);
      newList.active = list.active;
      return newList;
    });

    // take each listArr lists tasks, and make each task a new Task() object
    listArr.forEach((list) => {
      list.tasks = list.tasks.map((task) => Object.assign(new Task(), task));
    });
    console.log(listArr);
    return listArr;
  }
}
