const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const todoSchema = new moongoose.Schema( // schema
    {
        title :{
            type : String,
            required : true,
            maxLength : 50,
               },
        description : {
            type : String,
            required : true,
            maxLength : 50,
        },      
        CreatedAt : {
            type : Date,
            required : true,
            default : Date.now(),
        },
        updatedAt :{
            type : Date,
            required : true,
            default : Date.now(),
        }      
    }
);
module.exports = mongoose.model("Todo", todoSchema); // "Todo" name se apne schema ko use kar sakte ho