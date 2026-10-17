// Arrow functions are a more concise syntax for writing function expressions in JavaScript. They are often used for short functions and callbacks. Here's an example of how to use arrow functions:
let f = () => {
    console.log(this) ;
}
f() ; // -> undefined
let sum1 = (a, b) =>{
    return a + b ;
}   
// sum 1 === sum 2
let sum2 = (a, b) => a + b ; // if a single statement is present in the function body, we can skip the curly braces and the return keyword. The value of the expression will be returned automatically.
console.log(sum2(2, 3)) ; // -> 5