class Car {
  #price;
  constructor(name, model, price) {
    this.name = name;
    this.model = model;
    this.#price = price; // Private member
  }

  printCar() {
    console.log("Name", this.name);
    console.log("Model", this.model);
  }

  // Getter and Setter
  set setprice(p) {
    this.#price = p;
  }

  get getprice() {
    return this.#price;
  }
}

let maruti = new Car("Maruti", "White", 10);
let bmw = new Car("Bmw", "Blue", 20);

console.log(maruti);
console.log(bmw);

maruti.printCar();
bmw.printCar();

// console.log(maruti.#price); // ERROR
// Getter and Setter are functions but they are used as properties
maruti.setprice = 100;
console.log(maruti.getprice)