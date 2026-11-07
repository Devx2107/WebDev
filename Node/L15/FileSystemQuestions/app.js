const { readFile, writeFile } = require("fs");
const path = require("path");

const aPath = path.join(__dirname, "a.txt");
const bPath = path.join(__dirname, "b.txt");
const cPath = path.join(__dirname, "c.txt");

readFile(aPath, "utf8", (err, aData) => {
  if (err) {
    console.log("Error reading a.txt:", err.message);
    return;
  }

  readFile(bPath, "utf8", (err, bData) => {
    if (err) {
      console.log("Error reading b.txt:", err.message);
      return;
    }

    const sortedData = `${aData}\n${bData}`
      .split(/\s+/)
      .filter(Boolean)
      .map(Number)
      .sort((a, b) => a - b)
      .join("\n");

    writeFile(cPath, sortedData, (err) => {
      if (err) {
        console.log("Error writing c.txt:", err.message);
        return;
      }

      console.log("Sorted contents written to c.txt");
    });
  });
});