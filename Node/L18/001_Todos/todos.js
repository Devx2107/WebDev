const fs = require("fs/promises");
const path = require("path");
let filePath = path.join(__dirname, "data", "todos.json");

async function addTodo(newTodo) {
  try {
    // 1. Get the existing todos from todos.json
    let todos = await fs.readFile(filePath, 'utf-8');
    // We get JS String, convert it to JS Object
    todos = JSON.parse(todos);
    console.log(todos);
    // 2. add the new todo inside that todos array
    // {id, name}
    let newTodoItem = {
      id: new Date().getTime(),
      name: newTodo,
    };
    todos.push(newTodoItem);
    console.log(todos);
    // 3. Update your todos.json
    await fs.writeFile(filePath, JSON.stringify(todos));
  } catch (error) {
    throw new Error(error);
  }
}

async function updateTodo(id, newName) {
  try {
    id = Number(id);
    // 1. Get existing todos
    let allTodos = await fs.readFile(filePath, 'utf-8');
    allTodos = JSON.parse(allTodos);
    // 2. Find the todo to update
    let indx = allTodos.findIndex((item) => item.id == id);
    // 3. Update the todo and add it to todos.json
    allTodos[indx].name = newName;
    await fs.writeFile(filePath, JSON.stringify(allTodos));
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteTodo(id) {
  try {
    id = Number(id);
    // 1. Get existing todos
    let allTodos = await fs.readFile(filePath, 'utf-8');
    allTodos = JSON.parse(allTodos);
    // 2. Delete the todo
    allTodos = allTodos.filter((item) => item.id !== id);
    // 3. Write the new Todos
    await fs.writeFile(filePath, JSON.stringify(allTodos));
  } catch (error) {
    throw new Error(error);
  }
}

async function increasePriority(id) {
  try {
    id = Number(id);
    // 1. Get existing todos
    let allTodos = await fs.readFile(filePath, 'utf-8');
    allTodos = JSON.parse(allTodos);
    // 2. Delete the todo
    let indx = allTodos.findIndex((item) => item.id === id);
    if (indx <= 0) return;
    if (indx >= allTodos.length) return;
    [allTodos[indx - 1], allTodos[indx]] = [allTodos[indx], allTodos[indx - 1]];
    // 3. Write the new Todos
    await fs.writeFile(filePath, JSON.stringify(allTodos));
  } catch (error) {
    throw new Error(error);
  }
}

async function decreasePriority(id) {
  try {
    id = Number(id);
    // 1. Get existing todos
    let allTodos = await fs.readFile(filePath, 'utf-8');
    allTodos = JSON.parse(allTodos);
    // 2. Delete the todo
    let indx = allTodos.findIndex((item) => item.id === id);
    if (indx < 0) return;
    if (indx >= allTodos.length - 1) return;
    [allTodos[indx + 1], allTodos[indx]] = [allTodos[indx], allTodos[indx + 1]];
    // 3. Write the new Todos
    await fs.writeFile(filePath, JSON.stringify(allTodos));
  } catch (error) {
    throw new Error(error);
  }
}

async function getTodos() {
  try {
    let allTodos = await fs.readFile(filePath, 'utf-8');
    allTodos = JSON.parse(allTodos)
    console.log("All Todos", allTodos)
    return allTodos;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  addTodo,
  deleteTodo,
  updateTodo,
  increasePriority,
  decreasePriority,
  getTodos,
};