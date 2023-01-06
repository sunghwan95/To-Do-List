const listForm = document.querySelector("#list-form");
const inputTodos = document.querySelector("#list-form input:first-child");
const toDoList = document.querySelector("#to-do-list");

let toDoListArr = [];

function handleSubmitInput(event) {
  event.preventDefault();
  const listItemsValue = inputTodos.value;
  inputTodos.value = "";
  const listItemsValueObj = {
    id: Date.now(),
    content: listItemsValue,
  };
  toDoListArr.push(listItemsValueObj);
  const li = document.createElement("li");
  li.id = listItemsValueObj.id;
  const span = document.createElement("span");
  span.innerText = listItemsValueObj.content;
  const button = document.createElement("button");
  button.innerText = "❌";
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  localStorage.setItem("list-item", JSON.stringify(toDoListArr));

  button.addEventListener("click", removeListItem);
}

function removeListItem(event) {
  const li = event.target.parentElement;
  li.remove();
}

listForm.addEventListener("submit", handleSubmitInput);
