
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let renderToDos;
document.addEventListener("DOMContentLoaded", function () {
  const ul = document.querySelector(".js--todos-wrapper");

  const saveToDoBtn = document.querySelector(".form__btn");

  let currentUserIndex = null;

  renderToDos = () => {
  
    ul.innerHTML = "";

    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      let todosData = localStorage.getItem("todos");
   
      li.innerHTML = `
      <p class="naInputNeVeshaetsya"   onclick="checked(${index})">  <input type="checkbox" ></p>
        <span class="todo-item__description">${todo.name}</span>
                 <button class="todo-item__delete" onclick="removeToDo(${index})">Видалити</button>
         `;
         if (JSON.parse(todosData)[index].checked == true) {
          li.innerHTML = `
          <p class="naInputNeVeshaetsya"   onclick="checked(${index})">  <input type="checkbox" checked></p>
            <span class="todo-item__description">${todo.name}</span>
                     <button class="todo-item__delete" onclick="removeToDo(${index})">Видалити</button>
             `;
         }
       

      ul.appendChild(li);
      

  
    });
 
 
  };
  

 

  saveToDoBtn.addEventListener("click", () => {
    const name = document.querySelector(".js--form__input").value;

    if (currentUserIndex === null) {
      const id = todos.length ? todos[todos.length - 1].id + 1 : 1;
      todos.push({ id, name });
    } else {
      todos[currentUserIndex].name = name;
    }

    localStorage.setItem("todos", JSON.stringify(todos));
    renderToDos();
  });

  renderToDos();

  
});

let removeToDo = (index) => {
  if (confirm("Are you sure you want to delete this todo?")) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderToDos();
  }
};
let   checked = (index) => {
let completed = {checked:true }
  if (todos[index].checked == true || null) {
     completed = {checked: false }
  } 
  Object.assign(todos[index],completed)
  localStorage.setItem("todos", JSON.stringify(todos));
};
