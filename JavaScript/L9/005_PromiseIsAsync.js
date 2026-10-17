let p = new Promise(function(resolve, reject) {
    resolve ( "Promise is resolved");
});

p.then ( function  (msg ) {
    console.log (msg);
}) .catch ( function (err) {
    console.log (err);
}); 

console.log ( "Running randome code after promise is created") ;