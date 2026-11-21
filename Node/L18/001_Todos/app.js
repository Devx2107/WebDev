const path = require("path");
const express = require("express");
const {
  addTodo,
  deleteTodo,
  updateTodo,
  increasePriority,
  getTodos,
  decreasePriority,
} = require("./todos");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// APIs -> They are the ones through which people can talk to your app
app.get("/", async (req, res, next) => {
  try {
    let todos = await getTodos();
    console.log(todos)
    res.render("index", {
      todos,
    });
  } catch (error) {
    next(error);
  }
});

app.post("/add-todo", async (req, res, next) => {
  try {
    const { todo } = req.body;
    await addTodo(todo);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

app.get("/delete-todo/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteTodo(id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

app.post("/update-todo/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await updateTodo(id, name);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

app.get("/increase-todo/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await increasePriority(id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

app.get("/decrease-todo/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await decreasePriority(id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  res.render("error", {
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});