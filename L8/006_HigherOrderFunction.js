/* 
Higher order functions are functions that take other functions as arguments or return functions as their result. They allow for more abstract and flexible programming by enabling the creation of reusable and composable code.
in JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This allows for the creation of higher order functions that can accept functions as parameters or return functions as their output.
*/

function createFun() { 
    function hello() {
        console.log("Hello World");
    }
    return hello; // -> fucntion khud return hoga 
    // return hello() ; -?undefined return ho jaega 

}

let x = createFun();
console.log(x); // -> [Function: hello]
x() ; 