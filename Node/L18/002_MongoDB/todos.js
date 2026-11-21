const fs = require("fs/promises");
const path = require("path");
let filePath = path.join(__dirname, "data", "todos.json");
const Todos = require("./schema/todos.schema");

async function addTodo(newTodo) {
  try {
    // priortiy ke according todo is being sorted in the ascending order 
    let highestPriorityTodo = await Todos.findOne().sort({ priority: 1 });
    // dding a ? make the highestPriorityTodo optional, so that if it is null or undefined, it will not throw an error. Instead, it will return undefined.
    let currentPriority =highestPriorityTodo?.priority + 1 || 1;
    /* let currentTodo = new Todos ( { 
    name : newTodo, 
    pr})
    I*/
    await Todos.create ( { 
      name : newTodo ,
      priority : currentPriority ,
    });
    
  } catch (error) {
    throw new Error(error);
  }
}

async function updateTodo(id, newName) {
  try {
    
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteTodo(id) {
  try {
  } catch (error) {
    throw new Error(error);
  }
}

async function increasePriority(id) {
  try {
    
  } catch (error) {
    throw new Error(error);
  }
}

async function decreasePriority(id) {
  try {
    
  } catch (error) {
    throw new Error(error);
  }
}

async function getTodos() {
  try{
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