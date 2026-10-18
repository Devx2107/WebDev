let print = (institute, courseEnrolled) => {
  console.log(this, institute, courseEnrolled);
};

let person1 = {
  name: "Mayank",
  age: 19,
};

let person2 = {
  name: "Ananya",
  age: 19,
};

// Call
// fun.call(obj); // obj will be this inside function fun
// fun.call(obj, arg1, arg2, arg3); // arg1, arg2, arg3 will be the
// arguments of function fun if there are any...
print.call(person1, "Coding Blocks", "CPP");
print.call(person2, "Coding Blocks", "Web");

// print(); // default binding

// apply
// fun.apply(obj); // obj will be this inside function fun
// fun.apply(obj, [arg1, arg2, arg3]); // arg1, arg2, arg3 will be inside array
print.apply(person1, ["Coding Blocks", "CPP"]);
print.apply(person2, ["Coding Blocks", "Web"]);

// Call and Apply function ko immediately call kar dete hai
// Agar function ekdum call nhi karna but function ke andar binding ko change
// karna hai toh we use bind function
let f = print.bind(person1);
f("CB", "Data Science");

f = print.bind(person2, "CB");
f("Data Analytics");

f = print.bind(person2, "CB", "Data Engineering");
f();