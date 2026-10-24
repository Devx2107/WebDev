let inp = document.querySelector(".inp");
let text1 = document.querySelector("#text");
let text2 = document.querySelector("#text");
let text3 = document.querySelector("#text");
let text4 = document.querySelector("#text");
let text5 = document.querySelector("#text");

inp.addEventListener("keypress", (ev) => {
  let currentVal = inp.value + ev.key;
  console.log(currentVal);
});

text.addEventListener("keyup", (ev) => {
  let currentVal = text.value + ev.key;
  console.log(currentVal);
});

// for botht the text and input the event listener syntax stays the same 