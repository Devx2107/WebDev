let movies = document.querySelector(".movies");

let li = document.createElement("li");
// console.log(li)

li.innerText = "hulk";
// console.log(li)

// // Adding CSS Class to HTML element
li.classList.add("film");
// console.log(li);

movies.appendChild(li);


li = document.createElement("li");
// console.log(li)

li.innerText = "thor";
// console.log(li)

// // Adding CSS Class to HTML element
li.classList.add("film");
// console.log(li);

movies.appendChild(li);

li.innerText = "CaptainAmerica" ; 
li.classList.add("film") ;
console.log( li) ;
movies.appendChild(li) ;