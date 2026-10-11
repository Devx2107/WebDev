/* 
Ek fucntion ke compleete hone ke baad jo fcuntion call karte h usse callback fxn kehte h 
*/
function wakeUp(cb) {
    setTimeout(function () {
        console.log("Wake up");
        cb();                      // run the next step only after waking up
    }, 1000);
}

function takeABath(cb) {           // takes cb too, so it can pass control on
    setTimeout(function () {
        console.log("Take a bath");
        cb();
    }, 1000);
}

function eat() {                   // last step, so no cb needed
    setTimeout(function () {
        console.log("Eat breakfast");
    }, 1000);
}

wakeUp(function () {
    takeABath(eat);
});

console.log("Other work continues...");

// TakeBath is a callback function for wakeUp
// Jab wakeu ka kaam complete jo jaye toh jis function ko call karenge taht is callback function hoga.

function download(cb) {
    console.log("download starts");
    setTimeout(function () {
        console.log("download complete");
        cb();                         // start the next step only after download is done
    }, 1000);
}

function compress(cb) {
    console.log("compress starts");
    setTimeout(function () {
        console.log("compress complete");
        cb();
    }, 1000);
}

function upload() {                   // last step, so no cb
    console.log("upload starts");
    setTimeout(function () {
        console.log("upload complete");
    }, 1000);
}

download(function () {
    compress(upload);
}); 