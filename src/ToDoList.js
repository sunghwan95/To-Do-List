const listForm = document.querySelector("#list-form");
const toDoList = document.querySelector("#to-do-list");

function handleSubmitList(event) {
  event.preventDefault();
  const inputList = document.querySelector("#list-form input:first-child");
  const listItem = inputList.value;
  const li = document.createElement("li");
  toDoList.appendChild(li);
  li.innerText = listItem;
  inputList.value = "";
}

listForm.addEventListener("submit", handleSubmitList);
