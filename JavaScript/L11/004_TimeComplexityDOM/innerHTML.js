let numberlist = document.querySelector(".numberlist");
let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let cnt = 1;

// O(N^2)
function addNumbers() {
  // IN JS STRINGS ARE IMMUTABLE
//   number.innerHTML = `
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//     `;
  // Meine ek element add kia
  // purane wale + new ne milkar new string banadi

//   number.innerHTML = number.innerHTML + `<li>5</li>`;

  numberlist.innerHTML = numberlist.innerHTML+`<li>${cnt}</li>`;
  cnt++;
}

btn.onclick = function () {
  addNumbers();
};