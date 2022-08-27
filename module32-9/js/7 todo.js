function loadTodo() {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) => {
      displayTodo(json);
    });
}

function displayTodo(data) {
  const todoContainer = document.getElementById("todo-container");
  for (const todo of data) {
    console.log(todo);
    const todoDiv = document.createElement("div");
    todoDiv.innerHTML = `
        <h3>${todo.title}</h3>
        <p>${todo.completed}</p>
        <!-- using ternary operator -->
        <p>${todo.completed === true ? "complete" : "not complete"}</p>
    `;
    todoContainer.appendChild(todoDiv);
  }
}

loadTodo();
