const express = require("express");
const path = require("path");
const app = express();

app.use ( express.static ( path.join(__dirname,"public") ) );
// To make body readable we use
app.use(express.urlencoded({extended: true}));
/*
Functional Requirements:
TODO API:
1. Read Todos
2. Add a Todo
3. Update a Todo
4. Delete a Todo
*/

// GET Request
app.get("/sayhi", (req, res) => {
  res.send("Hii");
});

// In get request data is visible in the URL
// /greet?name=kartik
app.get("/greet", (req, res) => {
  const name = req.query.name;
  res.send(`Hiii ${name}`);
});

// POST Request: Data is hidden inside body
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`${email} logged in`);
});
// the server runs on this port 4444
app.listen(4444, () => {
  console.log("Running Port 4444");
});
