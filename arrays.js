var todos = ['item 1', 'item 2', 'item 3'] // Array

// console.log() displays the output of todos
console.log('My Todos: ', todos);

// .push() is an array method that appends what it is given to the end of the array that calls it
todos.push('item 4');

console.log("results of todos.push('item 4):");
console.log(todos)

// use bracket notation to access an item inside an array
console.log("results of todos[0]");
console.log(todos[0]);

// change an item of an array with bracket notation
console.log("results of todos[0] = 'updated item 1'");
todos[0] = 'updated item 1';
console.log(todos);

// to delete a todo we use the array method .splice()
console.log("results of todos.splice(3, 1)");
todos.splice(3, 1);
console.log(todos);
console.log("item 4 has been removed");
