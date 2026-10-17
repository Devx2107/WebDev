function vehicle () { 
}

function car () {
}

function bike () {
}


console.log ( vehicle.prototype.__proto__ === Object.prototype ) ; // -> true
console.log ( car.prototype.__proto__ === Object.prototype ) ; // -> true  
console.log ( bike.prototype.__proto__ === Object.prototype ) ; // -> true

car.prototype = Object.create(vehicle.prototype) ; // -> true
bike.prototype = Object.create(vehicle.prototype) ; // -> true

console.log( car.prototype.__proto__ == vehicle.prototype ) ; // -> true
console.log( bike.prototype.__proto__ == vehicle.prototype ) ; // -> true