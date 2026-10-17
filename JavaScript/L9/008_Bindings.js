// Implicict binding 

let person = { 
    name: 'John',
    print : function() {
        console.log(this) ;
    }
}

person.print() ; // -> { name: 'John', print: [Function: print] }
// Default Binding 

function print() {
    console.log(this) ;
}

print() ; // -> undefined

// Explicit Binding  -- Call , apply 

function print () { 
    console.log ( this ) 
}

let person1 = {
    name: 'John',
    age : 19 
}

let person2 = {
    name: 'Doe',
    age : 20 
}

// Call 
// fun.call ( obj ) // obj will be inside this fucntion fun 
// fun.call(obj, arg1 ,arg2, arg3) ; 

print.call(person1) ;
print.call(person2) ;

// print() ; // default binding 

print.apply ( person1) ;
print.apply ( person2) ;


// Difference between call and apply is that call takes arguments as a list and apply takes arguments as an array


// Bind () 

// Call apply fucntion immediately executes the function but bind returns a new function which can be called later

let printPerson1 = print.bind(person1) ;
let printPerson2 = print.bind(person2) ;

// wont work on arrow dintions , the output will stay the same as the default binding because arrow functions do not have their own this context