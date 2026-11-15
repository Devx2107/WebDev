const path = require("path") ;
const express = require ("express"); 
const PORT = 4444;/
const app = express() ;

app.set ( "view engine", hbs ) ;
app.use ( express.json () ) ;
app.use ( express.urlencoded( { exnteded : true })); 
app.use ( express.static ( path.join ( __dirname, "public")));

let todos = ["Dance" , "sing" , " cricket"]; 

// read 
app.get ( "/" , ( req,res) => { 

    res.render ("index", {
        title : "My todo application" ,
        todos,
    } )
})
// new 
app.post ( "/todos" , (req,res) => { 
    const { name } = req.body ; 
    todos.push(name) ;
})
// update 
app.post ( "/todos/update", (req,res) => { 
    const { index, newName} = req.body; 
    if ( newName && newName.trim()!== " " ) todos[index] = newName.trim() ;
    res.redirect ( "/") ;
})
// delete 
app.post ( "todos/delete" , ( req,res) => { 
    const { index } = req.body ; 
    todos.splice( index ,1 ); 
    res.redirect( "/") ;
})
app.listen ( PORT , () =>{
    console.log( 'https://localhost:' + PORT) ;
})