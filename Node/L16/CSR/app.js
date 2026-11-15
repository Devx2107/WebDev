const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let todos = ["Cricket", "Dance", "Sing"];
app.get("/todos", (req, res) => {
  res.send(todos);
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});