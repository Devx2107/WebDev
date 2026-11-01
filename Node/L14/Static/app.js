const express = require('express');
const path = require('path');
const app = express();

app.use ( '/' , express.static ( path.join ( __dirname , 'public' ) ) );
app.listen ( 4444 , () => {
    console.log ( "Server up and runngin on port 4444" ) 
})
