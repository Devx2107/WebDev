const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname,'public')));

app.use(function (req, res, next) {
  console.log("Running middleware-1");
  // next(); // Toh yeh agle function par aage chala jaega...
//   const { name } = req.query;
//   if (!name) {
//     return res.send("Please provide name");
//   }
  next();
});

// Works for    : /user/42 or /user/42/details or /user/42/details/..../test
app.use("/user/:id", (req, res, next) => {
  console.log("Running middleware - 2");
  next();
});

// Wont work for: /person/settings123, /person/settings-all
// Will work for: /person/settings, /person/settings/all, /person/settings/all/..../done
app.use("/person/settings", (req, res, next) => {
  console.log("Running middleware - person settings");
  next();
});

app.get('/person/settings/all',(req,res)=>{
    res.send("Updated person settings");
})

app.get("/", (req, res) => {
  const { name } = req.query;
  res.send(`Hello ${name}`);
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
