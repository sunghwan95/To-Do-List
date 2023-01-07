const listForm = document.querySelector("#list-form");
const inputTodos = document.querySelector("#list-form input:first-child");
const toDoList = document.querySelector("#to-do-list");

let toDoListArr = [];

function paintTodoList(listItemsValueObj) {
  const li = document.createElement("li");
  li.id = listItemsValueObj.id;
  const span = document.createElement("span");
  span.innerText = listItemsValueObj.content;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  button.addEventListener("click", removeListItem);
}

function handleSubmitInput(event) {
  event.preventDefault();
  const listItemsValue = inputTodos.value;
  inputTodos.value = "";
  const listItemsValueObj = {
    id: Date.now(),
    content: listItemsValue,
  };
  toDoListArr.push(listItemsValueObj);
  paintTodoList(listItemsValueObj);
  localStorage.setItem("list-item", JSON.stringify(toDoListArr));
}

function removeListItem(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoListArr = toDoListArr.filter(
    (listItemsValueObj) => listItemsValueObj.id !== parseInt(li.id)
  );
  localStorage.setItem("list-item", JSON.stringify(toDoListArr));
}

listForm.addEventListener("submit", handleSubmitInput);

const savedListItems = localStorage.getItem("list-item");
if (savedListItems) {
  const parseingValues = JSON.parse(savedListItems);
  toDoListArr = parseingValues;
  parseingValues.forEach(paintTodoList);
}
