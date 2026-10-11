let url = "https://movie.com/thor.mp4";

function download(url, cb) {
    setTimeout(function () {
        if (!url) return cb(new Error("No URL"));
        cb(null, url.split("/").pop());              // "thor.mp4"
    }, 1000);
}
function compress(file, cb) {
    setTimeout(function () {
        cb(null, file.split(".")[0] + ".zip");       // "thor.zip"
    }, 1000);
}
function upload(zip, cb) {
    setTimeout(function () {
        cb(null, "https://newmovies.com/" + zip);
    }, 1000);
}
function sendEmail(link, cb) {
    setTimeout(function () {
        cb(null, "Email sent with " + link);
    }, 1000);
}
function logResult(msg, cb) {
    setTimeout(function () {
        cb(null, "Logged: " + msg);
    }, 1000);
}

download(url, function (err, file) {
    if (err) { console.log(err.message); return; }
    console.log(file);
    compress(file, function (err, zip) {
        if (err) { console.log(err.message); return; }
        console.log(zip);
        upload(zip, function (err, newUrl) {
            if (err) { console.log(err.message); return; }
            console.log(newUrl);
            sendEmail(newUrl, function (err, msg) {
                if (err) { console.log(err.message); return; }
                console.log(msg);
                logResult(msg, function (err, done) {
                    if (err) { console.log(err.message); return; }
                    console.log(done);
                });
            });
        });
    });
});

// use promised  to fix this 


A partial fix without Promises

Naming the callbacks flattens the nesting, but the data passing gets awkward:

js
function onLog(err, done) { if (err) return console.log(err.message); console.log(done); }
function onEmail(err, msg) { if (err) return console.log(err.message); console.log(msg); logResult(msg, onLog); }
function onUpload(err, newUrl) { if (err) return console.log(err.message); console.log(newUrl); sendEmail(newUrl, onEmail); }
function onCompress(err, zip) { if (err) return console.log(err.message); console.log(zip); upload(zip, onUpload); }
function onDownload(err, file) { if (err) return console.log(err.message); console.log(file); compress(file, onCompress); }
download(url, onDownload);