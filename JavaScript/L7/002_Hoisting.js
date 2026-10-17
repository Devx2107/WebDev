// Hoisting in JS 
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

// Example of hoisting with variables
console.log(myVar); // Output: undefined (due to hoisting)
var myVar = 10;



// before 
console.log("1:", a);                 // ?
var a = 10;
console.log("2:", a);                 // ?

console.log("3:", sayHi());           // ?
function sayHi() { return "Hi from function declaration"; }

try { console.log("4:", add(2, 3)); } // ?
catch (e) { console.log("4:", e.constructor.name, "-", e.message); }
var add = function (x, y) { return x + y; };
console.log("5:", add(2, 3));         // ?

try { console.log("6:", b); }         // ?
catch (e) { console.log("6:", e.constructor.name, "-", e.message); }
let b = 5;
console.log("7:", b);                 // ?

var x = 10;
function fun() {
    console.log("8:", x);             // ?
    var x = 200;
    console.log("9:", x);             // ?
}
fun();
console.log("10:", x);                // ?

//After 
function sayHi() { return "Hi from function declaration"; }   // whole function lifted
var a;                                // var: declaration lifted, value undefined
var add;                              // var: only the name lifted
var x;                                // var: only the name lifted
function fun() {
    var x;                            // lifted to the top of fun, shadows the outer x
    console.log("8:", x);             // undefined
    x = 200;
    console.log("9:", x);             // 200
}
// let b;  (hoisted too, but untouchable until its own line: temporal dead zone)

console.log("1:", a);                 // undefined
a = 10;
console.log("2:", a);                 // 10

console.log("3:", sayHi());           // works

try { console.log("4:", add(2, 3)); } // add is still undefined here
catch (e) { console.log("4:", e.constructor.name, "-", e.message); }
add = function (x, y) { return x + y; };
console.log("5:", add(2, 3));         // 5

try { console.log("6:", b); }         // dead zone
catch (e) { console.log("6:", e.constructor.name, "-", e.message); }
let b = 5;
console.log("7:", b);                 // 5

x = 10;
fun();
console.log("10:", x);                // 10: outer x untouched