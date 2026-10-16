let globalVar = "Global Level";

function outerFunc() {
    let outerVar = "Outer Level";

    function innerFunc() {
        let innerVar = "Inner Level";
        
        // The inner function can access its own variables, its parent's variables, and global variables.
        console.log(innerVar);  // Output: Inner Level
        console.log(outerVar);  // Output: Outer Level
        console.log(globalVar); // Output: Global Level
    }

    innerFunc();
    
    // The outer function cannot access variables defined inside the inner function.
    // console.log(innerVar); // Throws ReferenceError: innerVar is not defined
}

outerFunc();