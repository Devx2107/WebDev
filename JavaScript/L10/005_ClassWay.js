class vehicle{
    constructor(){

    }
    
}

class car extends vehicle{
    constructor(){

    }
}

class bike extends vehicle{
    constructor(){

    }
}

console.log(car.prototype.__proto__ == vehicle.prototype);
console.log(bike.prototype.__proto__ == vehicle.prototype);
console.log(vehicle.prototype.__proto__ == Object.prototype);

// this is just like the function way 
// function vehicle(){

// }

// function car(){

// }

// function bike(){

// }

// console.log(vehicle.prototype.__proto__ == Object.prototype);
// console.log(car.prototype.__proto__ == Object.prototype);
// console.log(bike.prototype.__proto__ == Object.prototype);

// car.prototype = Object.create(vehicle.prototype);
// bike.prototype = Object.create(vehicle.prototype);

// console.log(car.prototype.__proto__ == vehicle.prototype);
// console.log(bike.prototype.__proto__ == vehicle.prototype);

// console.log(car.prototype.__proto__ == Object.prototype);