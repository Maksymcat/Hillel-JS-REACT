const createWork = document.querySelector(".form__btn");
const toDoList = document.querySelector(".js--todos-wrapper");

const dataInput = document.querySelector(".js--form__input");




createWork.addEventListener("click", function (event) {
   let li = document.createElement("li");

  li.classList.add('todo-item')
  toDoList.appendChild(li);
  let buttonForDelete = document.createElement("button");
  li.appendChild(buttonForDelete);
  buttonForDelete.classList.add("todo-item__delete");
  buttonForDelete.textContent = "Видалити завдання";

  li.addEventListener("click", (event) => {
    if (event.target.classList.contains("todo-item__delete")) {
      toDoList.removeChild(li);
    }
  });
});