let container = document.querySelector('.container');

function addHeading(){
    // 1. Create HTML element h1
    let h1 = document.createElement('h1');
    // console.log(h1)
    // 2. Add text to h1
    h1.innerText = "Learning DOM!";

    // 3. Append this inside body
    container.appendChild(h1);
}

addHeading();