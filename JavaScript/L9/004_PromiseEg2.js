function download(url) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      let songName = url.split("/").pop();
      console.log("Download Completed");
      res(songName);
    }, 2000);
  });
}

function compress(song) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      let compressedSong = song.split(".")[0] + ".zip";
      console.log("Compress Completed");
      res(compressedSong);
    }, 2000);
  });
}

function upload(compressedSong) {
  return new Promise((res, rej) => {
    setTimeout(function () {
      console.log("Upload Completed");
      let newUrl = "https://newsongs.mp4/" + compressedSong;
      res(newUrl);
    }, 2000);
  });
}

download("http://songs.com/power.mp4")
  .then(compress)
  .then(upload)
  .then((newUrl) => {
    console.log(newUrl);
  })
  .catch((err) => {
    console.log(err);
  });