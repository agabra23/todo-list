(()=>{"use strict";var n={177:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,":root {\n  font-size: 62.5%;\n\n  --primary-dark: #333;\n\n  --primary-light: #fff1f2;\n  --red-100: #ffe4e6;\n  --red-200: #fecdd3;\n  --red-300: #fda4af;\n  --red-400: #fb7185;\n  --red-500: #f43f5e;\n  --red-600: #e11d48;\n  --red-700: #be123c;\n  --red-800: #9f1239;\n  --red-900: #881337;\n}\n\n.add-modal {\n  position: fixed;\n  top: 0;\n  top: 100%;\n  height: 500px;\n  min-width: 100vw;\n  /* background: linear-gradient(60deg, var(--red-100), var(--red-200)); */\n  background-color: #efefef;\n  z-index: 98;\n  transition: 0.4s;\n  padding: 2rem;\n  box-shadow: 0 0 5px 8px rgba(0, 0, 0, 0.2);\n  border-radius: 2rem;\n}\n\n.add-modal form {\n  display: flex;\n  flex-direction: column;\n  gap: 3rem;\n}\n\ninput {\n  outline: none;\n  appearance: none;\n  border: none;\n  background-color: transparent;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n  text-align: left;\n  padding: 0.8rem;\n  font-size: 2rem;\n  color: var(--primary-dark);\n}\n\ninput#taskDescription {\n  font-size: 1.5rem;\n}\n\ninput::placeholder {\n  color: rgba(51, 51, 51, 0.4);\n}\n\n.add-modal.open {\n  top: calc(100% - 500px);\n}\n\n.submit-btn,\n.close-add-modal-btn {\n  display: none;\n}\n\n.submit-btn:hover,\n.close-add-modal-btn:hover {\n  display: none;\n  transform: scale(1.1);\n}\n\n.submit-and-close-btns {\n  align-self: flex-end;\n  display: flex;\n  gap: 1rem;\n}\n\n.submit-wrapper,\n.close-wrapper {\n  background-color: var(--red-600);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n\n@media (min-width: 601px) {\n  .submit-wrapper:hover,\n  .close-wrapper:hover {\n    transform: scale(1.1);\n  }\n}\n\n#submitSVG,\n#closeSVG {\n  width: 2.7rem;\n  display: inline-block;\n  color: var(--primary-light);\n  @media (min-width: 601px) {\n    width: 3rem;\n  }\n}\n\n.task-btns-container {\n  display: flex;\n  /* padding: 2rem; */\n  justify-content: space-between;\n  align-items: center;\n}\n\n.task-btn {\n  appearance: none;\n  outline: none;\n  background: none;\n  border: 1px solid rgba(51, 51, 51, 0.2);\n  font-size: 2rem;\n  color: var(--primary-dark);\n  padding: 1rem 1.5rem;\n  border-radius: 1rem;\n}\n\n.due-date-container,\n.priority-btn-container {\n  font-size: 2rem;\n  color: var(--primary-dark);\n  display: flex;\n  align-items: center;\n}\n\n.priority-btn-container {\n  display: flex;\n  gap: 1rem;\n}\n\n.due-date-container > input {\n  text-align: center;\n}\n\n.label-margin {\n  margin-right: 2rem;\n  font-size: 2rem;\n  color: var(--primary-dark);\n}\n\n.priority-btn {\n  color: var(--red-500);\n  border-color: var(--red-500);\n  cursor: pointer;\n  transition: all 0.4s;\n}\n\n.priority-btn.active {\n  background-color: var(--red-500);\n  color: var(--primary-light);\n}\n\n@media (min-width: 601px) {\n  .priority-btn:hover {\n    background-color: var(--red-500);\n    color: var(--primary-light);\n    transform: scale(1.1);\n  }\n}\n",""]);const d=i},572:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,':root {\n  font-size: 62.5%;\n  font-family: "Nunito", sans-serif;\n  background-color: var(--primary-light);\n\n  --primary-dark: #333;\n\n  --primary-light: #fff1f2;\n  --red-100: #ffe4e6;\n  --red-200: #fecdd3;\n  --red-300: #fda4af;\n  --red-400: #fb7185;\n  --red-500: #f43f5e;\n  --red-600: #e11d48;\n  --red-700: #be123c;\n  --red-800: #9f1239;\n  --red-900: #881337;\n}\n\n.desktop-nav {\n  background-color: var(--red-500);\n  width: 300px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top-right-radius: 2rem;\n  border-bottom-right-radius: 2rem;\n\n  @media (max-width: 600px) {\n    display: none;\n  }\n}\n\n.list-container {\n  display: flex;\n  flex-direction: column;\n}\n',""]);const d=i},783:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,":root {\n  --primary-light: #efefef;\n  --primary-dark: #333;\n\n  --red-50: #fff1f2;\n  --red-100: #ffe4e6;\n  --red-200: #fecdd3;\n  --red-300: #fda4af;\n  --red-400: #fb7185;\n  --red-500: #f43f5e;\n  --red-600: #e11d48;\n  --red-700: #be123c;\n  --red-800: #9f1239;\n  --red-900: #881337;\n}\n\n.hamburger-menu {\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 24px;\n  width: 30px;\n  padding: 0;\n  opacity: 1;\n  z-index: 99;\n\n  @media (min-width: 601px) {\n    display: none;\n  }\n}\n\n.bar {\n  background-color: var(--red-500);\n  height: 3px;\n  width: 100%;\n  transition: transform 0.3s ease-in-out;\n  border-radius: 2px;\n}\n\n.hamburger-menu.open .bar:first-child {\n  transform: translateY(11px) rotate(45deg);\n  background-color: var(--red-500);\n}\n\n.hamburger-menu.open .bar:nth-child(2) {\n  opacity: 0;\n  background-color: var(--red-500);\n}\n\n.hamburger-menu.open .bar:last-child {\n  transform: translateY(-10px) rotate(-45deg);\n  background-color: var(--red-500);\n}\n\n.mobile-nav {\n  position: fixed;\n  top: 0;\n  right: 100%;\n  width: 100%;\n  min-height: 100vh;\n  background: linear-gradient(60deg, var(--red-100), var(--red-200));\n  z-index: 98;\n  transition: 0.4s;\n\n  @media (min-width: 600px) {\n    display: none;\n  }\n}\n\n.mobile-nav.open {\n  right: 0;\n}\n",""]);const d=i},890:(n,e,r)=>{r.d(e,{Z:()=>m});var t=r(81),o=r.n(t),a=r(645),i=r.n(a),d=r(783),s=r(666),c=r(572),l=r(177),p=i()(o());p.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap);"]),p.i(d.Z),p.i(s.Z),p.i(c.Z),p.i(l.Z),p.push([n.id,':root {\n  font-size: 62.5%;\n  font-family: "Nunito", sans-serif;\n  background-color: var(--primary-light);\n\n  --primary-dark: #333;\n\n  --primary-light: #fff1f2;\n  --red-100: #ffe4e6;\n  --red-200: #fecdd3;\n  --red-300: #fda4af;\n  --red-400: #fb7185;\n  --red-500: #f43f5e;\n  --red-600: #e11d48;\n  --red-700: #be123c;\n  --red-800: #9f1239;\n  --red-900: #881337;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  min-height: 100svh;\n}\n\nbody {\n  height: 100svh;\n\n  @media (min-width: 601px) {\n    display: flex;\n    padding: 2rem 2rem 2rem 0;\n    gap: 1rem;\n  }\n}\n\n#mainWrapper {\n  flex: 1;\n}\n\nheader {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  gap: 3rem;\n  padding: 2rem 4rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--primary-dark);\n  background-color: var(--primary-light);\n  /* box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.2); */\n}\n\nheader > h1 {\n  font-size: 3.5rem;\n  font-weight: 700;\n  text-align: center;\n}\n\nmain {\n  padding: 2rem 4rem;\n  color: var(--primary-dark);\n}\n\n.add-btn {\n  font-size: 3.5rem;\n  text-align: center;\n  position: fixed;\n  bottom: 5rem;\n  right: 8rem;\n  cursor: pointer;\n  background-color: var(--red-600);\n  border-radius: 50%;\n  color: var(--primary-light);\n  width: 5rem;\n  height: 5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 200ms;\n\n  @media (max-width: 600px) {\n    right: 3rem;\n    bottom: 4rem;\n  }\n}\n\n@media (min-width: 601px) {\n  .add-btn:hover {\n    transform: scale(1.1);\n  }\n}\n',""]);const m=p},666:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(81),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,':root {\n  --primary-dark: #333;\n\n  --primary-light: #fff1f2;\n  --red-100: #ffe4e6;\n  --red-200: #fecdd3;\n  --red-300: #fda4af;\n  --red-400: #fb7185;\n  --red-500: #f43f5e;\n  --red-600: #e11d48;\n  --red-700: #be123c;\n  --red-800: #9f1239;\n  --red-900: #881337;\n}\n\n#content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n\n.task-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\ninput[type="checkbox"] {\n  visibility: hidden;\n  position: absolute;\n}\n\n.task-container label {\n  flex: 1;\n  font-size: 2rem;\n  font-weight: 600;\n  color: var(--primary-dark);\n  vertical-align: middle;\n  border-bottom: 1px solid rgba(51, 51, 51, 0.2);\n  padding: 1rem 0;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.custom-checkbox {\n  cursor: pointer;\n  display: inline-block;\n  width: 2rem;\n  height: 2rem;\n  margin-right: 1.5rem;\n  border: 2px solid currentColor;\n  border-radius: 50%;\n  transform: scale(1);\n  transition: all 200ms ease-in-out;\n}\n\n.task-container:hover .custom-checkbox {\n  @media (min-width: 601px) {\n    transform: scale(1.2);\n    color: var(--red-500);\n  }\n}\n\ninput[type="checkbox"]:checked + label > .custom-checkbox {\n  background-color: var(--primary-dark);\n  border: 2px solid var(--primary-dark);\n  box-shadow: inset 0 0 0px 2px var(--primary-light);\n}\n\ninput[type="checkbox"]:checked + label {\n  opacity: 50%;\n}\n',""]);const d=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var a={},i=[],d=0;d<n.length;d++){var s=n[d],c=t.base?s[0]+t.base:s[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var m=r(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)e[m].references++,e[m].updater(u);else{var f=o(u,t);t.byIndex=d,e.splice(d,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var d=r(a[i]);e[d].references--}for(var s=t(n,o),c=0;c<a.length;c++){var l=r(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),a=r(569),i=r.n(a),d=r(565),s=r.n(d),c=r(216),l=r.n(c),p=r(589),m=r.n(p),u=r(890),f={};f.styleTagTransform=m(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;class h{constructor(n="",e="",r="",t="None"){this.title=n,this.description=e,this.dueDate=r,this.priority=t,this.completed=!1}toggleCompleted(){this.completed=!this.completed,console.log(this.completed)}}const g=n=>{console.log("working");const e=document.getElementById("content");e.innerHTML="",n.tasks.forEach(((n,r)=>{const t=document.createElement("div");t.classList.add("task-container");const o=document.createElement("input");o.setAttribute("type","checkbox");const a=`task${r+1}`;o.setAttribute("id",a),n.completed&&(o.checked=!0);const i=document.createElement("label");i.setAttribute("for",a);const d=document.createElement("span");d.classList.add("custom-checkbox"),i.innerHTML=`<span class="custom-checkbox"></span>${n.title}`,e.appendChild(t),t.appendChild(o),t.appendChild(i),n.completed&&d.classList.add("completed"),o.addEventListener("click",(e=>{n.toggleCompleted(),e.stopPropagation()}))}))},b=new class{constructor(){this.tasks=[]}addTask(n){this.tasks.push(n)}deleteTask(n){let e=this.tasks.indexOf(n);-1!=e&&this.tasks.splice(e,1)}},v=document.getElementById("hamburgerMenu"),y=document.getElementById("mobileNav");v.onclick=()=>{v.classList.toggle("open"),y.classList.toggle("open")};const x=document.getElementById("addBtn"),k=document.getElementById("addModal");document.getElementById("addform"),document.getElementById("closeAddModal").onclick=()=>{E()},x.onclick=()=>{x.classList.toggle("open"),k.classList.toggle("open")};const w=document.querySelectorAll(".priority-btn");function E(){x.classList.toggle("open"),k.classList.toggle("open"),w.forEach((n=>{n.classList.remove("active")})),document.querySelectorAll("input").forEach((n=>{n.value=""}))}w.forEach((n=>{n.onclick=()=>{let e=n.classList.contains("active");w.forEach((n=>{n.classList.remove("active")})),0==e&&n.classList.add("active")}})),document.getElementById("addSubmit").onclick=n=>{n.preventDefault(),function(){let n=(()=>{const n=document.getElementById("taskName").value,e=document.getElementById("taskDescription").value,r=document.getElementById("dueDateMonth").value,t=document.getElementById("dueDateDay").value,o=document.getElementById("dueDateYear").value;let a="None";return w.forEach((n=>{n.classList.contains("active")&&(a=n.textContent)})),new h(n,e,`${r}/${t}/${o}`,a,!1)})();b.addTask(n),console.log(b.tasks),E(),g(b)}()}})()})();