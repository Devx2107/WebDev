const { unlink } = require('fs');
const path = require('path');

let filePath = path.join(__dirname, 'output.txt');

unlink(filePath, (err) => {
    if (err) {
        console.log('Error deleting file:', err.message);
    } else {
        console.log('File deleted successfully');
    }
});