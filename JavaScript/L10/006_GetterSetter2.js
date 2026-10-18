class Person{
    constructor(firstname, lastname){
        this.firstname = firstname 
        this.lastname = lastname 
    }

    set name(n){
        let a = n.split(' ');
        this.firstname = a[0];
        this.lastname = a[1];
    }
}

let mayank = new Person("Mayank","Kumar")
console.log(mayank);

mayank.name = "Mayank Singh";
console.log(mayank)