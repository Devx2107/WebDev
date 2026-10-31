const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

// /greet?name=Kartik
app.get("/greet", (req, res) => {
  /*
    query parameters
    req.query={
        name: "Kartik"
    }
    */
  const name = req.query.name;
  res.send(`Hello ${name}`);
});

// /greeting?name=Kartik&lastname=mathur
app.get("/greeting", (req, res) => {
  /*
    query parameters
    req.query={
        name: "Kartik",
        lastname: "mathur"
    }
    */
  const name = req.query.name;
  const lastname = req.query.lastname;
  res.send(`Hello ${name} ${lastname}`);
});

// /salutate/kartik/mathur
app.get("/salutate/:name/:lastname", (req, res) => {
  /*
        req.params = {
            name: "kartik",
            lastname: "mathur"
        }
    */

  const name = req.params.name;
  const lastname = req.params.lastname;
  res.send(`Hey! ${name} ${lastname}`);
});

app.listen(4444, function () {
  console.log("Express Server Started at Port Number ", 4444);
});