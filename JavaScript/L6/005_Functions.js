//Functions in JS 
function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // prints "Hello, John!"

function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // prints 8
let x = add(10.1, 20.2); // calling the function and storing the result in a variable
console.log(x.toFixed(2)); // prints 30.30
console.log(x.toPrecision(4)); // prints 30.30