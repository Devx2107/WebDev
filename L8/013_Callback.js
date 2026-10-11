let url = "https://movie.com/thor.mp4";

function download(url, cb) {
    console.log("download starts");
    setTimeout(function () {
        let fileName = url.split("/").pop();            // "thor.mp4"
        console.log("download complete:", fileName);
        cb(fileName);                                   // hand the result to the next step
    }, 1000);
}

function compress(fileName, cb) {
    console.log("compress starts");
    setTimeout(function () {
        let zipName = fileName.split(".")[0] + ".zip";  // "thor.zip"
        console.log("compress complete:", zipName);
        cb(zipName);
    }, 1000);
}

function upload(zipName, cb) {
    console.log("upload starts");
    setTimeout(function () {
        let newUrl = "https://newmovies.com/" + zipName;
        console.log("upload complete");
        cb(newUrl);
    }, 1000);
}

download(url, function (fileName) {
    compress(fileName, function (zipName) {
        upload(zipName, function (newUrl) {
            console.log("Final URL:", newUrl);
        });
    });
});

