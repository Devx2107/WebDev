function outerFun() {
    let a = 1;
    function innerFun() {
        a++;
        function fun() {
            a++;
            console.log(a);
        }
        return fun;
    }
    return innerFun;
}

let genFun = outerFun();
let f1 = genFun();   // innerFun runs, returns fun
let f2 = genFun();   // innerFun runs again, returns another fun

f1();
f1();
f1();
f2();
f2();
f2();
f1();