let id = setInterval(function(){
    console.log("Hello World");
}, 1000);

setTimeout(function(){
    clearInterval(id);
    console.log("Interval cleared");
}, 5000);

// Sandboxing : Docker