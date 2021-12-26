const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; // 값이 바뀔 수 있도록 let으로 변수 선언. 빈값에서 시작함.

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // toDos array의 내용을 localStorage에 넣는 것임.
// JSON.stringify는 자바스크립트 object나 array 또는 어떤 자바스크립트 코드건 간에 그걸 string으로 만들어 줌.

function deleteToDo(event) {
  const li = event.target.parentElement; // 이게 우리가 삭제하고 싶은 li임.
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶음.
  // toDo.id는 데이터 타입이 number이지만, li.id는 string임. li.id를 parseInt()시켜야 함.
  saveToDos(); // toDos DB에서 todo를 지운 뒤에 saveToDos를 한번 더 불러야 함.
} 

function paintTodo(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  list.appendChild(span); // span을 li 안에 넣는 방법
  toDoList.appendChild(list);
  list.appendChild(button);
} // todo를 그리는 역할을 담당. 여기서 인수 newTodo는 text임.

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value; // 이 시점에서 우리가 하는 건 input의 value를 새로운 변수에 복사하는 것임.
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(), // 현재의 시간을 밀리초(1000분의 1초)로 주는 함수임.
    // 이 초들이 거의 랜덤처럼 보이기 때문에 이걸 id로 사용할 것임.
  };
  toDos.push(newTodoObj); // newToDo를 그리기 전에 newTodo 변수를 toDos array로 보냄.
  paintTodo(newTodoObj); // paintTodo 함수에게 newTodo 변수를 보냄.
  saveToDos(); // toDos array를 localStorage에 집어넣는 역할을 함.
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  // JSON.parse()는 단순한 string을 javaScript가 이해할 수 있는 살아있는 array로 만드는 함수임.
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo); // paintTodo만 호출하면 됨.
  // paintTodo는 텍스트를 받는데 자바스크립트는 그 텍스트를 paintTodo에게 전달해주기 때문.
  // 텍스트는 newTodo이며 그것들은 우리 array에 있는 각각의 item임.
}
