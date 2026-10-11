function callFn(fn) {
    fn() ;
}

function hello() { 
    console.log("Hello World");
}

function world() {
    console.log("Hello World");
}

callFn(hello) ; // -> Hello World
callFn(world) ; // -> Hello World