// Object loops are a way to iterate over the properties of an object. In JavaScript, you can use the `for...in` loop to iterate over the enumerable properties of an object. Here's an example:

let obj = {
    name: "John", // string property
    age: 30, // number property
    isStudent: true, // boolean property
    email: "john@example.com" // string property
};

for (let key in obj) {
    console.log(key, obj[key]);
}

obj["city"] = "New York"; // adding a new property to the object
console.log("After adding a new property:");
for (let key in obj) {
    console.log(key, obj[key]);
}

// deleting a property from the object
delete obj.age; // deleting the 'age' property from the object
console.log("After deleting a property:");
for (let key in obj) {
    console.log(key, obj[key]);
}