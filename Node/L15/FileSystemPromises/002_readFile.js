const { readFile } = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'output.txt');
// Callback functions are always error-first callback functions
readFile(filePath, (err,data) => { 
    if ( err )  {
        console.log('Error reading file:', err.message);
    } else {
        console.log('File read successfully');
        console.log('File contents:', data.toString());
    }
});