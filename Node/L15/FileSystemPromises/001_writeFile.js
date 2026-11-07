const { readFile } = require('node:fs/promises');
const path = require('path');

let fileName = 'names.txt';
let filePath = path.join(__dirname, 'data', fileName);

readFile(filePath, {
    encoding: 'utf-8' // this will tell how to convert the buffer to string
})
    .then((data) => {
        console.log(data)
    }).catch(err => {
        console.log(err);
    })
/*
readFile(filePath)
    .then((data) => {
        // console.log(data)
        // Whenever we want to convert buffer to string we use this function
        console.log(data.toString());
    }).catch(err => {
        console.log(err);
    })
*/

readFile(filePath, { flag: 'r' })
  .then((data) => {
    console.log(Buffer.isBuffer(data)); // true
    console.log(data.toString('utf8')); // आर्यन
  })
  .catch((err) => console.error(err));