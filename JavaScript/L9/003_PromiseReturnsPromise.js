let p = new Promise(function(resolve, reject) {
    setTimeout ( function () { 
        resolve("Promise success") ;
    }, 2000 );
}); 

p.then(function(value) {
    console.log(value);
    return "chaining1";
})
.then(function(value) {
    console.log(value);
    return "chaining2";
})
.then(function(value) {
    console.log(value);
});