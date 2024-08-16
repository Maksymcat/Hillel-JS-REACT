let todos = JSON.parse(localStorage.getItem("todos")) || [];
let renderToDos;

const $youQuest = $(".modal-title");
const $textOfTodo = $(".modal-body");
$(document).ready(function () {
  const $ul = $(".js--todos-wrapper");
  const $saveToDoBtn = $(".form__btn");

  let currentUserIndex = null;

  renderToDos = () => {
    $ul.empty();

    todos.forEach((todo, index) => {
      const todosData = localStorage.getItem("todos");
      const isChecked = JSON.parse(todosData)[index].checked;

      const $li = $("<li>").addClass("todo-item");

      $li.attr('data-bs-toggle="modal" data-bs-target="#exampleModal');
      $li.html(`
        <p class="naInputNeVeshaetsya" onclick="checked(${index})">
          <input type="checkbox" ${isChecked ? "checked" : ""}>
        </p>
        <span data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="showTheQuest(${index})" class="todo-item__description">${
        todo.name
      }</span>
        <button class="todo-item__delete" onclick="removeToDo(${index})">Видалити</button>
      `);

      $ul.append($li);
    });
  };

  $saveToDoBtn.on("click", () => {
    const name = $(".js--form__input").val();

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

let showTheQuest = (index) => {
  $youQuest.html(`Ваше завдання`);
  $textOfTodo.html(`${todos[index].name}`);
};
let removeToDo = (index) => {
  if (confirm("Are you sure you want to delete this todo?")) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderToDos();
  }
};

let checked = (index) => {
  let completed = { checked: true };
  if (todos[index].checked == true || null) {
    completed = { checked: false };
  }
  Object.assign(todos[index], completed);
  localStorage.setItem("todos", JSON.stringify(todos));
};
