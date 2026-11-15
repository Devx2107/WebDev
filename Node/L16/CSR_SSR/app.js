const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let todos = ["Dance", "Sing", "Cricket"];
// Read
app.get("/", (req, res) => {
  res.render("index", {
    title: "My Todo application",
    todos,
  });
});
// New
app.post ( "/todos", (req,res)=> {
  const { name } = req.body;
  todos.push(name);
// redirect will make a post request 
  res.redirect("/");
})
// Update
app.post("/todos/update", (req, res) => {
  const { index, newName } = req.body;
  if (newName && newName.trim() !== "") {
    todos[index] = newName.trim();
  }
  res.redirect("/");
});
// Delete
app.post("/todos/delete", (req, res) => {
  const { index } = req.body;
  // splice(startIndex, deleteCount) removes 1 item at that position
  todos.splice(index, 1);
  res.redirect("/");
});

app.get("/increase/:index", (req, res) => {
  const index = Number(req.params.index);

  if (Number.isInteger(index) && index > 0 && index < todos.length) {
    [todos[index], todos[index - 1]] = [todos[index - 1], todos[index]];
  }

  res.redirect("/");
});

app.get("/decrease/:index", (req, res) => {
  const index = Number(req.params.index);

  if (Number.isInteger(index) && index >= 0 && index < todos.length - 1) {
    [todos[index], todos[index + 1]] = [todos[index + 1], todos[index]];
  }

  res.redirect("/");
});
app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});


