const createWork = document.querySelector(".createWork");
const toDoList = document.querySelector(".to-do-list");

const dataInput = document.querySelector(".textOfWork");




createWork.addEventListener("click", function (event) {
   let li = document.createElement("li");
  li.textContent = dataInput.value;
  toDoList.appendChild(li);
  let buttonForDelete = document.createElement("button");
  li.appendChild(buttonForDelete);
  buttonForDelete.classList.add("btn-delete");
  buttonForDelete.textContent = "Видалити завдання";

  li.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-delete")) {
      toDoList.removeChild(li);
    }
  });
});