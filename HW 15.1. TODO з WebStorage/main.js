document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".js--form");
  const input = document.querySelector(".js--form__input");
  const todosWrapper = document.querySelector(".js--todos-wrapper");
  let todos = [];
  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const loadTodos = () => {
    const data = localStorage.getItem("todos");
    if (data) {
      todos = JSON.parse(data);
      todos.forEach((todo, index) => {
        const li = createTodoItem(todo.text, todo.completed, index);
        todosWrapper.appendChild(li);
      });
    }
  };
  const createTodoItem = (text, completed = false, index) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (completed) {
      li.classList.add("todo-item--checked");
    }
    li.dataset.index = index;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    const span = document.createElement("span");
    span.className = "todo-item__description";
    span.textContent = text;
    const button = document.createElement("button");
    button.className = "todo-item__delete";
    button.textContent = "Видалити";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    return li;
  };
  const renderTodos = () => {
    todosWrapper.innerHTML = "";
    todos.forEach((todo, index) => {
      const li = createTodoItem(todo.text, todo.completed, index);
      todosWrapper.appendChild(li);
    });
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    const todo = {
      text: value,
      completed: false,
    };
    todos.push(todo);
    saveTodos();
    renderTodos();
    input.value = "";
  });
  todosWrapper.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    if (!li) return;
    const index = Number(li.dataset.index);
    if (e.target.tagName === "INPUT" && e.target.type === "checkbox") {
      todos[index].completed = e.target.checked;
      saveTodos();
      renderTodos();
    }
    if (e.target.classList.contains("todo-item__delete")) {
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    }
  });
  loadTodos();
});
