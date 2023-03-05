//from

const toDoForm = document.getElementById("todo-formfrom");
const toDoInput = document.querySelector("#todo-formfrom input");
const toDoList = document.getElementById("todo-listfrom");

const TODOS_KEY = "todosfrom";
let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}



// super refresh button  



function allDeleteToDo() {
  
  window.localStorage.clear();
}

const wowBtn = document.querySelector(".refreshbtn");
wowBtn.addEventListener("click", allDeleteToDo);




// super refresh button  





function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
// from

//to
const toDoForm1 = document.getElementById("todo-formto");
const toDoInput1 = document.querySelector("#todo-formto input");
const toDoList1 = document.getElementById("todo-listto");

const TODOS_KEY1 = "todosto";
let toDos1 = [];

function saveToDos1() {
  localStorage.setItem(TODOS_KEY1, JSON.stringify(toDos1));
}

function deleteToDo1(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos1 = toDos1.filter((toDo1) => toDo1.id !== parseInt(li.id));
  saveToDos1();
}

function paintToDo1(newTodo1) {
  const li = document.createElement("li");
  li.id = newTodo1.id;
  const span = document.createElement("span");
  span.innerText = newTodo1.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo1);
  li.appendChild(span);
  li.appendChild(button);
  toDoList1.appendChild(li);
}

function handleToDoSubmit1(event) {
  event.preventDefault();
  const newTodo1 = toDoInput1.value;
  toDoInput1.value = "";
  const newToDoObj1 = {
    text: newTodo1,
    id: Date.now(),
  };
  toDos1.push(newToDoObj1);
  paintToDo1(newToDoObj1);
  saveToDos1();
}

toDoForm1.addEventListener("submit", handleToDoSubmit1);

const savedToDos1 = localStorage.getItem(TODOS_KEY1);

if (savedToDos1 !== null) {
  const parsedToDos1 = JSON.parse(savedToDos1);
  toDos1 = parsedToDos1;
  parsedToDos1.forEach(paintToDo1);
}

//to

//super refresh!!!
// function booom() {
//   window.location.reload();
//   window.localStorage.clear();
// }

// const refreshBtn = document.querySelector(".refreshbtn");
