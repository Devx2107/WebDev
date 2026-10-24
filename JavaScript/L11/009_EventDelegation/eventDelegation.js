let movieList = document.querySelector(".movieList");

movieList.addEventListener("click", (ev) => {
  // console.log(ev.target.innerText);
  if (ev.target.classList.contains("film")) {
    console.log(ev.target.innerText);
  }
  /*
classList have following functions
1. add
2. remove
3. contains
4. toggle (Hai toh hatado, nhi hai class toh lagado)
*/
});

let li = document.createElement("li");
li.innerText = "Superman";
li.classList.add("film");
movieList.appendChild(li);