let lib2 = require ( "./lib2" ); 
console.log ( "lib1 loaded" );

function add ( a,b ) { 
    return a + b ;
}

module.exports.add = add ; 
module.exports.lib2 = lib2 ;