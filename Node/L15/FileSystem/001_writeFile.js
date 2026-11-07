const {writeFile} = require('fs');
const path = require('path');

let filePath = path.join ( __dirname , 'output.txt' );
// Callback fucntions are always error first call back fucntions
writeFile ( filePath , 'Hello World \n' , { 
    flag : 'a' // Append to the file if it already exists , doesnt overwrite each time you run it 
},(err) => {
    if (err) {
        console.log('Error writing file:', err.message);
    } else {
        console.log('File written successfully');
    }
});