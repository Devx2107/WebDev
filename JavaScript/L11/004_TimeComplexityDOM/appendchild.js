let numberlist = document.querySelector(".numberlist");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let cnt = 1;

function addNumbers() {
  // 1. Create HTML element h1
  let li = document.createElement("li");
  // console.log(h1)
  // 2. Add text to h1
  li.innerText = cnt;
  cnt++;
  // 3. Append this inside body
  numberlist.appendChild(li);
  
}

btn.onclick = function () {
  addNumbers();
};