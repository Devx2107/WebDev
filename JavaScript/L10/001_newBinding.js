function Car ( name , color ) {
    this.name = name;
    this.color = color;
}

let maruti = Car("Maruti", "Red");
let bmw = Car("BMW", "Black");

console.log(maruti); // undefined
console.log(bmw); // undefined

// the output is undefined because the function Car is called without the new keyword, so it does not create a new object and instead returns undefined.
// the car fucntions doesn't return anything, so the variables maruti and bmw are assigned undefined.