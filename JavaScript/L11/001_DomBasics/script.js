let div = document.querySelector(".container");
console.log(div);

let span = document.getElementById('myspan');
console.log(span);

let x = document.querySelector('#myspan');
console.log(x)

let ul = document.querySelector('.movies');
console.log(ul);

// DOM manipulation ke through
// hum CSS, HTML ko change kar skte hai

// 1. To create HTML element
let li = document.createElement('li');
console.log(li)

// There are 2 ways to add text or HTML inside
// HTML element
// 1. innerText -> Text add ho skta hai
// 2. innerHTML -> HTML add ho skta hai

li.innerText = `Hulk`
ul.appendChild(li);

li = document.createElement('li');
li.innerText = `Thor`
ul.appendChild(li);