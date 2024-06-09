const form = document.querySelector("form");
const empty = document.querySelector(".empty");
const todo = document.querySelector(".todo");
const containers = document.querySelectorAll(".sec2>div");
const containers1 = document.querySelectorAll(".sec2>div>div:first-child");
const tasks = document.querySelectorAll(".sec2>div>div>h4:first-child>span");
form.addEventListener("submit", addTask);
function addTask(e) {
  e.preventDefault();
  empty.style.display = "none";
  let div = document.createElement("div");
  div.draggable = true;
  div.addEventListener("drag", drag);
  div.className = "card";
  let p1 = document.createElement("p");
  let p2 = document.createElement("p");
  let button1 = document.createElement("button");
  let button2 = document.createElement("button");
  p1.innerText = form.taskName.value;
  let date = new Date();
  p2.innerText =
    date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  button1.innerText = "edit";
  button1.className = "material-icons";
  button2.className = "material-icons";
  button2.innerText = "delete";
  div.append(p1, p2, button1, button2);
  todo.appendChild(div);
  form.taskName.value = "";
  button1.addEventListener("click", () => {
    p1.contentEditable = true;
    p1.style.border = "2px solid black";
    p1.style.padding = "3px 8px";
    p1.style.borderRadius = "5px";
    p1.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        p1.contentEditable = false;
        p1.style.border = "none";
      }
    });
  });
  button2.addEventListener("click", () => {
    div.remove();
  });
}
// for (let i=0;i<containers1.length;i++){
//   // containers1[i].addEventListener("dragover",dragLeave1);
//   // containers1[i].addEventListener("dragover",dragEnter1);
// }
for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("dragover", dragOver);
  containers[i].addEventListener("drop", drop);
  // containers[i].addEventListener("dragleave", dragLeave);
  containers[i].addEventListener("dragenter", dragEnter);
}
let dragedElement;
function drag(e) {
  dragedElement = e.target;
}
function dragOver(e) {
  if (e.currentTarget.className === dragedElement.parentNode.className) {
    return;
  }
  e.preventDefault();
}
function drop(e) {
  e.currentTarget.appendChild(dragedElement);
}
// function dragLeave(e) {
//   if(e.currentTarget.children[0].className===dragedElement.parentNode.children[0].className){
//     let element = e.currentTarget.children[0].children[0].children[0];
//     let value = Number(element.innerText);
//     element.innerText = value;
//   }
// }
function dragEnter(e) {
  if(e.currentTarget.children[0].className!==dragedElement.parentNode.children[0].className){
    let element = e.currentTarget.children[0].children[0].children[0];
    let value = Number(element.innerText);
    element.innerText = value;
  }
  // let element = e.currentTarget.children[0].children[0].children[0];
  // let value = Number(element.innerText);
  // element.innerText = ++value;
}
