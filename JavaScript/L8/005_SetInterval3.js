// Single line for setInterval and clearInterval
let id  = setInterval(function(){
    console.log("Hello World")
},1000 , setTimeout(function(){
    clearInterval(id);
    console.log("Interval cleared");
},5000));

// let id = sI(fn, 1000, sT(id));