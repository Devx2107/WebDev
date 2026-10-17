/*
CLosure is parent scope ka saara data ek object mein 
saath le jaega ( jo fucntion return kar raha hai )
that is what we call closure.
*/ 

function createFunction() {
    let a = 10;

    function fun() {
        console.log(a);   // a is not inside fun, it lives in the parent
    }
    return fun;
}

let f = createFunction();
/*
createFunction has finished and its scope should be gone.
But fun was returned together with a hidden "backpack":

    f = function fun() { console.log(a); }
        + closure -> { a: 10 }

When f runs and can't find `a` in its own scope, it looks in the
closure, finds a = 10, and uses it.
*/

f();   // 10