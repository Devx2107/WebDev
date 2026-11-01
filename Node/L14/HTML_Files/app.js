const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send(`
    <div
      style="color:red; background-color:lightgray; font-size:20px; font-family:Arial; text-align:justify; letter-spacing:5px; transition:transform 5s;"
      onmouseover="this.style.transform='translateX(1000px)'"
      onmouseout="this.style.transform='translateX(0)'">
      Hello World lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
    </div>
  `);
});

app.get("/file", (req, res) => {
  const fileDesc = path.join(__dirname, "index.html");
  res.sendFile(fileDesc);
});

app.listen(4444, () => {
  console.log("Express Server Started at Port Number", 4444);
});