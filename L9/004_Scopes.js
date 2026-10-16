/*
console.log(x);

// This will give reference error
// ReferenceError: Cannot access 'x' before initialization
let x = "I am variable x";

console.log(x);
*/
// ---------- 1. FUNCTION SCOPE: all three stay inside a function ----------
function demoFunction() {
    var v = "var";
    let l = "let";
    const c = "const";
    console.log("1a inside:", v, l, c);
}
demoFunction();
try { console.log(v); } catch (e) { console.log("1b outside:", e.name); }

// ---------- 2. BLOCK SCOPE: if / standalone { } ----------
if (true) {
    var vBlock = "var leaks";
    let lBlock = "let stays";
    const cBlock = "const stays";
}
console.log("2a var outside block:", vBlock);
try { console.log(lBlock); } catch (e) { console.log("2b let outside block:", e.name); }
try { console.log(cBlock); } catch (e) { console.log("2c const outside block:", e.name); }

{   // a plain standalone block, just { } with nothing in front
    var inV = 1;
    let inL = 2;
    const inC = 3;
    console.log("2d inside plain block:", inV, inL, inC);
}
console.log("2e after plain block, var:", inV);
try { console.log(inL); } catch (e) { console.log("2f after plain block, let:", e.name); }

// ---------- 3. SHADOWING with a block ----------
let x = "outer";
{
    let x = "inner";               // a different variable, only inside this block
    console.log("3a", x);
}
console.log("3b", x);

// ---------- 4. LOOPS: block scope matters most here ----------
for (var i = 0; i < 3; i++) { }
console.log("4a var i after loop:", i);          // leaked
try { for (let j = 0; j < 3; j++) { } console.log(j); }
catch (e) { console.log("4b let j after loop:", e.name); }

// ---------- 5. CLASSIC CLOSURE TRAP with setTimeout ----------
for (var a = 0; a < 3; a++) {
    setTimeout(() => console.log("5a var:", a), 0);   // all share ONE a
}
for (let b = 0; b < 3; b++) {
    setTimeout(() => console.log("5b let:", b), 0);   // each iteration gets its OWN b
}

// ---------- 6. const: the variable is locked, not the contents ----------
const arr = [1, 2];
arr.push(3);
console.log("6a", arr);
try { arr = [9]; } catch (e) { console.log("6b", e.name, "-", e.message); }
const user = { name: "Dev" };
user.name = "DevX";
console.log("6c", user);

// ---------- 7. Other { } blocks: try, switch, while behave the same ----------
try { let t = 1; var tv = 2; } finally { }
console.log("7a var from try:", tv);
try { console.log(t); } catch (e) { console.log("7b let from try:", e.name); }

// ---------- 8. Redeclaration ----------
var r = 1; var r = 2;
console.log("8a var redeclare ok:", r);