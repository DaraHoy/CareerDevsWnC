var todos = ['item 1', 'item 2', 'item 3'];

function displayTodos() {
    console.log("My todos:", todos);
}

function addTodos(todo) {
    todos.push(todo);
    displayTodos();
}

function changeTodo(pos, val) {
    todos[pos] = val;
    displayTodos();
}

function deleteTodo(pos) {
    todos.splice(pos, 1);
    displayTodos();
}
