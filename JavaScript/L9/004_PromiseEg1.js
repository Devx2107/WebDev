// We can only say hello is name is provided
// We can make this function act like a promise -> Function se promise return karna
// padega
function sayHello(name) {
  return new Promise((res, rej) => {
    if (!name || name.length == 0) {
      rej("Name is not defined");
    } else {
      setTimeout(function () {
        console.log("Hello", name);
        res("Success");
      }, 3000);
    }
  });
}

sayHello("Mayank")
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("Let me do some other task");