let numberlist = document.querySelector(".numberlist");
let btn = document.querySelector('.btn');
let inp = document.querySelector('.inp');
// O(N^2)
function addNumbers(n) {
//   console.log(numberlist.innerHTML);
  // numberlist.innerHTML = `<li class="numbers">1</li>`
  // numberlist.innerHTML += `<li class="numbers">2</li>`
  // numberlist.innerHTML += `<li class="numbers">3</li>`
  numberlist.innerHTML = "";
  for (let i = 1; i <= n; i++) {
    numberlist.innerHTML += `<li class="number">${i}</li>`
  }
}

btn.onclick = function(){
    // console.log("Button Clicked")
    addNumbers(inp.value);
}

// To read input box ki value
