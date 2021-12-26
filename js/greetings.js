const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_className = "hidden";
const USERNAME_KEY = "username";

function LoginSubmit(event) {
  event.preventDefault(); //  어떤 event의 기본 행동이든지 발생되지 않도록 막는 함수임.
  loginForm.classList.add(HIDDEN_className);
  const username = loginInput.value;
  loginInput.value = "";
  localStorage.setItem(USERNAME_KEY, username); //localStorage에 유저 이름 저장함.
  paintGreetings(username); // paintGreetings 함수 호출
} // local storage에 뭔가를 저장하면 paintGreetings를 호출하는 순간에 그 유저정보는 이미 local storage에 저장됨.

function paintGreetings(username) {
  greeting.innerText = `Hello ${username} Have a nice day~!`;
  greeting.classList.remove(HIDDEN_className);
} // 겹치는 것 함수로 만듦. 위에 함수안에 들어있는 내용이 겹치는 내용임.

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_className);
  loginForm.addEventListener("submit", LoginSubmit);
} else {
  paintGreetings(savedUsername); // paintGreeting 함수 호출
} // localStorage에 유저정보가 있다면 localStorage에서 저장된 값을 인자로 가지는 paintGreetings를 호출함.
