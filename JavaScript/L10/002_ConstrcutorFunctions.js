// using constructor function to create objects
function Car ( name , color ) {
    this.name = name;
    this.color = color;
}
// the new keyword is used to create a new object and set the value of this to that new object. It also returns the new object from the function.
let maruti = new Car("Maruti", "Red");
let bmw = new Car("BMW", "Black");

console.log(maruti); // Maruti
console.log(bmw); // BMW