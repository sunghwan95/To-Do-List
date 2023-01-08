const loginForm = document.querySelector("#login-form");
const inputBox = document.querySelector(".login-form-container");
const inputName = document.querySelector(".input-name");
const sayHello = document.querySelector("#login-form h1");

const USERNAME_KEY = "username-key";

function greeting(event) {
  event.preventDefault();
  const nameValue = inputName.value;
  localStorage.setItem(USERNAME_KEY, nameValue);
  inputBox.classList.add("hidden");
  sayHello.innerText = `Hello my master, ${nameValue}!`;
  sayHello.classList.remove("hidden");
}

loginForm.addEventListener("submit", greeting);

if (localStorage.getItem(USERNAME_KEY)) {
  inputBox.classList.add("hidden");
  sayHello.innerText = `Hello my master, ${localStorage.getItem(
    USERNAME_KEY
  )}!`;
  sayHello.classList.remove("hidden");
}
