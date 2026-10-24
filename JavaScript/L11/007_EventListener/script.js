let btn = document.querySelector(".btn");
console.log(btn)
// btn.onclick = function () {
//   console.log("Running fun-1");
// };

// Upar wala function replace kar diya by this
// btn.onclick = function (x) {
//   console.log(x);
//   console.log("Running fun-2");
// };

btn.addEventListener("click", (ev) => {
  console.log("Running - 1");
  // ev ke andar click event ke regarding details hoti hai
  // ev ek object hai jo click karne par milta hai
  console.log(ev);
  console.log(ev.target);
});

btn.addEventListener("click", (ev) => {
  console.log("Running - 2");
})