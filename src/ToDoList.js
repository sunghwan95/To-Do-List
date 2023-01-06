const listForm = document.querySelector("#list-form");
const toDoList = document.querySelector("#to-do-list");

const listItemArr = [];

function handleSubmitList(event) {
  event.preventDefault();
  const inputList = document.querySelector("#list-form input:first-child");
  const listItem = inputList.value;
  const li = document.createElement("li");
  const button = document.createElement("button");
  toDoList.appendChild(li);
  li.innerText = listItem;
  li.appendChild(button);
  button.innerText = "❌";
  listItemArr.push(listItem);
  inputList.value = "";
  localStorage.setItem("list_items", JSON.stringify(listItemArr));

  button.addEventListener("click", function () {
    toDoList.removeChild(li);
  });
}

listForm.addEventListener("submit", handleSubmitList);
