let movielist = document.querySelectorAll(".movielist");

movielist.addEventListener("click", (ev) => {
    console.log(ev.target.innerText);
})

let li = document.createElement("li");
li.innerText = "The Dark Knight";
li.classList.add("movielist");
movielist.appendChild(li);

/*
 Class list also got the folllwoing functions 
1. add 
2. remove 
3. contains 
4. toggle hai to hatado , nhi h to clas lagado
*/ 