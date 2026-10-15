// Arrow funnctions are a more concise syntax for writing function expressions in JavaScript. They are often used for short functions and have some differences compared to traditional function expressions, such as not having their own `this` context.

// Here's an example of an arrow function that takes two parameters and returns their sum:

const add = (a, b) => {
    return a + b;
};
console.log(add(5, 3)); // prints 8

// If the function body has only one expression, you can omit the curly braces and the `return` keyword:
const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // prints 6

// Arrow functions can also be used without parameters:
const greet = () => "Hello!";
console.log(greet()); // prints "Hello!"










