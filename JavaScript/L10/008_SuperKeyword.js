class vehicle{
    constructor(company){
        this.company = company;
    }
    
    makeSound(){
        console.log("Random Sound of a Vehicle");
    }
}

class car extends vehicle{
    constructor(company, name, color){   
        super(company)
        this.name = name;
        this.color = color;
    }

    printCar(){
        console.log("Company", this.company);
        console.log("name", this.name);
        console.log("color", this.color);
    }

    makeSound(){
        // super.makeSound(); // Parent ke makeSound ko call kr dega
        console.log("Exhaust Loud Sound");
    }
}


class bike extends vehicle{
    constructor(){
        super("BMW");
    }
}

let A = new car("Maruti","Alto", "Grey");
console.log(A);

A.makeSound();

let B = new bike();
B.makeSound();