var listElements = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElements.innerHTML = "";
  for (todo of todos) {
    // check the position
    var pos = todos.indexOf(todo);
    // create an entry in the list
    var todoElement = document.createElement("li");
    var todoText = document.createTextNode(todo);
    // create "excluir" button
    var linkElement = document.createElement("a");
    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("onclick", "deleteTodo("+ pos +")");
    var linkText = document.createTextNode("Excluir");
    linkElement.appendChild(linkText);
    // append to the todoElement
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    // append to the main array
    listElements.appendChild(todoElement)
  }
}

function addTodo() {
  var todoText = inputElement.value;
  todos.push(todoText);
  inputElement.value = "";
  renderTodos();
  saveToStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1); // 1st arg is the index, 2nd is the quantity to be removed
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}

buttonElement.onclick = addTodo;
renderTodos();
