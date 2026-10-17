//  Objects store key annd value pairs. In this case, the variable 'obj' is an object that contains properties and their corresponding values.

let obj = {
    name: "John", // string property
    age: 30, // number property
    isStudent: true, // boolean property
    email: "john@example.com" ,// string property
    " "  :"empty space" ,  
    ' ' : "empty space"  
};

console.log(obj); // prints the object
console.log(obj.name); // prints the value of the 'name' property (John)
console.log(obj.age); // prints the value of the 'age' property (30)
console.log(obj.isStudent); // prints the value of the 'isStudent' property (true)
console.log(obj.email); // prints the value of the 'email' property (john@example.com)


console.log(obj["name"]); // prints the value of the 'name' property (John)
console.log(obj["age"]); // prints the value of the 'age' property (30)
console.log(obj["isStudent"]); // prints the value of the 'isStudent' property (true)
console.log(obj["email"]); // prints the value of the 'email' property (john@example.com)

// on " " and ' ' are valid keys in an object, but they are not recommended as they can cause confusion and make the code less readable. It is better to use descriptive keys that clearly indicate the purpose of the property.
// they require this call 
console.log(obj[" "]); // prints the value of the ' ' property (empty space)
console.log(obj[' ']); // prints the value of the ' ' property (empty space)