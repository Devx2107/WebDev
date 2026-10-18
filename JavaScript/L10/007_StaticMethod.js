/* 
Static members belong to a class -> iski ek hi copy hoti h 
non static members belong to object ->name and mode har car ka alg h 
*/

class Car {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  static sayHello(){
    console.log("Hello");
  }
}

let maruti = new Car("Maruti", "White");
let bmw = new Car("Bmw", "Blue");

console.log(maruti);
console.log(bmw);

Car.sayHello();