function hello () { 
    console.log( "Binding in hello " , this ) 
    let world = () => {
        console.log( "Binding in world " , this )
    }
    world() ; 
}

let obj = { 
    name : "CB"
}

hello.apply(obj) ; // this will bind the hello function to the obj object, so the value of this inside the hello function will be the obj object. The world function is an arrow function, so it will inherit the value of this from the hello function, which is the obj object.