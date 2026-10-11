/* 
THe need of closure is to preserve the data of parent scope in child scope.
*/
function createFun() {
  let a = 10;
  function sum() { return a + 5; }
  return sum;
}
let f = createFun();
f();
// here a disappears from the memory which gives errors 