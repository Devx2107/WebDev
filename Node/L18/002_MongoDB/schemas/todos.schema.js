
const {default : mongoose } = require ("mongoose") ;

const todoSchema = new mongoose.Schema ({ 
    name : { 
        type : String ,
        required : true,
    }, 
    priority : { 
        type : Number , 
        required : true,
        default : 1 ,
    }, 
});
// the name you give here 'Todos' is the same name that will be used to create the collection in the database.
const todoModel = mongoose.model ( 'Todos' , todoSchema); 
// Module exports help to make the todoModel available for use in other files.
module.exports = todoModel ;