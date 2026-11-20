const path = require("path");
const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 4444;

app.set("view engine", "hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Read todos from file
let todos = JSON.parse(fs.readFileSync("todos.json", "utf-8"));

// Read
app.get("/", (req, res) => {
    res.render("index", {
        title: "My Todo application",
        todos
    });
});

// Create
app.post("/todos", (req, res) => {
    const { name } = req.body;

    todos.push(name);

    fs.writeFileSync("todos.json", JSON.stringify(todos));

    res.redirect("/");
});

// Update
app.post("/todos/update", (req, res) => {
    const { index, newName } = req.body;

    todos[index] = newName;

    fs.writeFileSync("todos.json", JSON.stringify(todos));

    res.redirect("/");
});

// Delete
app.post("/todos/delete", (req, res) => {
    const { index } = req.body;

    todos.splice(index, 1);

    fs.writeFileSync("todos.json", JSON.stringify(todos));

    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});