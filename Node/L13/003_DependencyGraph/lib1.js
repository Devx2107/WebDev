let lib2 = require("./lib2");
console.log("Running lib1");
function add(a, b) {
  return a + b;
}

module.exports = {
  add,
  lib2,
};