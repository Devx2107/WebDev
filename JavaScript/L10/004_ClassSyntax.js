// Basic syntax of Class in JS 

/*
Here classes help in prototype chaining 
- JS is not OOPS Oriented 
- Class as a syntax exist krti hai that helps with prototype chaining
- Constructor fucntion hota h class mein 
- Getter and Setter bhi hote h class mein 
- Private Data members bhi bana skte h class mein 
- Static methods bhi hote h class mein 
- fucntion bhi hote h calss mein 
- but ye OOPS ni h 
*/

class Car { 
    constructor(name, model) { 
        this.name = name;
        this.model = model;
    }
    printCar() { 
        console.log(`Car name is ${this.name} and model is ${this.model}`)
    }
}

let maruti = new Car("Maruti", "Swift");
let bmw = new Car("BMW", "X5");

console.log(maruti); // Car { name: 'Maruti', model: 'Swift' }
console.log(bmw); // Car { name: 'BMW', model: 'X5' }

maruti.printCar(); // Car name is Maruti and model is Swift
bmw.printCar(); // Car name is BMW and model is X5

console.log ( Car.prototype ) ; // { printCar: [Function: printCar], constructor: [class Car] }
console.log ( maruti.__proto__ === Car.prototype ) ; // true
console.log ( maruti.__proto__.__proto__ === Car.prototype ) ; // false 
console.log ( maruti.__proto__.__proto__.__proto__ === Car.prototype ) ; // false 

console.log ( maruti.__proto__.__proto__ === Object.prototype ) ; // true 
console.log ( maruti.__proto__.__proto__.__proto__ === Object.prototype ) ; // false


