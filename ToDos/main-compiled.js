"use strict";

var todos = JSON.parse(localStorage.getItem("todos")) || [];
var renderToDos;
var $youQuest = $(".modal-title");
var $textOfTodo = $(".modal-body");
$(document).ready(function () {
  var $ul = $(".js--todos-wrapper");
  var $saveToDoBtn = $(".form__btn");
  var currentUserIndex = null;
  renderToDos = function renderToDos() {
    $ul.empty();
    todos.forEach(function (todo, index) {
      var todosData = localStorage.getItem("todos");
      var isChecked = JSON.parse(todosData)[index].checked;
      var $li = $("<li>").addClass("todo-item");
      $li.attr('data-bs-toggle="modal" data-bs-target="#exampleModal');
      $li.html("\n        <p class=\"naInputNeVeshaetsya\" onclick=\"checked(".concat(index, ")\">\n          <input type=\"checkbox\" ").concat(isChecked ? "checked" : "", ">\n        </p>\n        <span data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\" onclick=\"showTheQuest(").concat(index, ")\" class=\"todo-item__description\">").concat(todo.name, "</span>\n        <button class=\"todo-item__delete\" onclick=\"removeToDo(").concat(index, ")\">\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438</button>\n      "));
      $ul.append($li);
    });
  };
  $saveToDoBtn.on("click", function () {
    var name = $(".js--form__input").val();
    if (currentUserIndex === null) {
      var id = todos.length ? todos[todos.length - 1].id + 1 : 1;
      todos.push({
        id: id,
        name: name
      });
    } else {
      todos[currentUserIndex].name = name;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
    renderToDos();
  });
  renderToDos();
});
var showTheQuest = function showTheQuest(index) {
  $youQuest.html("\u0412\u0430\u0448\u0435 \u0437\u0430\u0432\u0434\u0430\u043D\u043D\u044F");
  $textOfTodo.html("".concat(todos[index].name));
};
var removeToDo = function removeToDo(index) {
  if (confirm("Are you sure you want to delete this todo?")) {
    todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    renderToDos();
  }
};
var checked = function checked(index) {
  var completed = {
    checked: true
  };
  if (todos[index].checked == true || null) {
    completed = {
      checked: false
    };
  }
  Object.assign(todos[index], completed);
  localStorage.setItem("todos", JSON.stringify(todos));
};
