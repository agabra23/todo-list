(()=>{"use strict";const s=new class{constructor(){this.tasks=[],this.completedTasks=[]}addTask(s){this.tasks.push(s)}completeTask(s){let t=this.tasks.indexOf(s);-1!=t&&this.tasks.splice(t,1),-1===this.completedTasks.indexOf(s)&&this.completedTasks.push(s)}deleteTask(s){let t=this.tasks.indexOf(s);-1!=t&&this.tasks.splice(t,1);let e=this.completedTasks.indexOf(s);-1!=e&&this.completedTasks.splice(e,1)}},t=document.getElementById("hamburgerMenu"),e=document.getElementById("mobileNav");t.onclick=()=>{t.classList.toggle("open"),e.classList.toggle("open")};const i=new class{constructor(s="",t="",e=undefined,i=0){this.title=s,this.description=t,this.dueDate=e,this.priority=i}}("Get Groceries","Get groceries at Stop and Shop","Today",3);s.addTask(i),console.log(s.tasks)})();