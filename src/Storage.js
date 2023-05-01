import { Task } from "./todo";
import { List } from "./todo";

export default class Storage {
  static saveListArr(data) {
    localStorage.setItem("listArr", JSON.stringify(data));
  }

  static getListArr() {
    // init listArr from localStorage
    let listArr = JSON.parse(localStorage.getItem("listArr"));

    // take each listArr list and make it a new List() object
    let tempArr = listArr.slice();
    listArr = tempArr.map((list) => Object.assign(new List(), list));

    console.log("listArr map each list as new List()");
    console.log(listArr);

    // take each listArr lists tasks, and make each task a new Task() object
    listArr.forEach((list) => {
      list.tasks = list.tasks.map((task) => Object.assign(new Task(), task));
    });
    return listArr;
  }
}
