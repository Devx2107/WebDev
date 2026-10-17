function getMaggi() { 
    return new Promise(function(resolve, reject) {
        let shopStatus = 'Closed' ; // this is supposed to fetched from the db 
        setTimeout( function() {
            if ( shopStatus === 'Open') {
                resolve('Maggi is ready');
            }
            else {
                reject('Shop is closed');
            }

            console.log ( "kuch bi") ;
        }, 2000);
    });
}

getMaggi() 
    .then(function(value) {
        console.log(value) ;
    })
    .catch(function(error) {
        console.log(error) ;
    }) ;
console.log ( " Running other code" );