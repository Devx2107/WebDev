// Closure in js
// Definition: A closure is a function that has access to its own scope, the outer function's scope, and the global scope. It allows a function to remember and access variables from its outer scope even after the outer function has finished executing.

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

