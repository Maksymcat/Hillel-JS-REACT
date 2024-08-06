document.addEventListener("DOMContentLoaded", function () {
  const userTableBody = document.querySelector(".js--todos-wrapper");

  const saveUserBtn = document.querySelector(".form__btn");

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let currentUserIndex = null;

  const renderUsers = () => {
  
    userTableBody.innerHTML = "";

    users.forEach((user, index) => {
      const userRow = document.createElement("li");
      userRow.classList.add("todo-item");

      userRow.innerHTML = `
               <p class="naInputNeVeshaetsya"  onclick="checked(${index})">  <input type="checkbox"></p>
                       <span class="todo-item__description">${user.name}</span>
                      <button class="todo-item__delete" onclick="removeUser(${index})">Видалити</button> 
              `;

      userTableBody.appendChild(userRow);

      let usersData = localStorage.getItem("users");
      if (JSON.parse(usersData)[index].checked == true) {
        userRow.innerHTML = `
         <p class="naInputNeVeshaetsya"   onclick="checked(${index})">  <input type="checkbox" checked></p>
           <span class="todo-item__description">${user.name}</span>
                    <button class="todo-item__delete" onclick="removeUser(${index})">Видалити</button>
            `;
      } else {
        userRow.innerHTML = `
                      <p class="naInputNeVeshaetsya" onclick="checked(${index})">  <input type="checkbox"></p>
           <span class="todo-item__description">${user.name}</span>
                    <button class="todo-item__delete" onclick="removeUser(${index})">Видалити</button>
            `;
      }
    });
  };

  let checked = (index) => {
    if (users[index].checked == true || null) {
      users[index].checked = false;
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users[index].checked = true;
      localStorage.setItem("users", JSON.stringify(users));
    }
  };

  const removeUser = (index) => {
    if (confirm("Are you sure you want to delete this user?")) {
      users.splice(index, 1);
      localStorage.setItem("users", JSON.stringify(users));
      renderUsers();
    }
  };

  saveUserBtn.addEventListener("click", () => {
    const name = document.querySelector(".js--form__input").value;

    if (currentUserIndex === null) {
      const id = users.length ? users[users.length - 1].id + 1 : 1;
      users.push({ id, name });
    } else {
      users[currentUserIndex].name = name;
    }

    localStorage.setItem("users", JSON.stringify(users));
    renderUsers();
  });

  renderUsers();

  window.checked = checked;
  window.removeUser = removeUser;
});
