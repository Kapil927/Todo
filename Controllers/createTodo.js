const Todo = require("../Modles/Todo"); //ye Todo jo hai na mogoose ka schema hi hai, so niche jo Todo.create() to vo db se connect karta hai

// define route handler / bussiness logic / controller
 
exports.createTodo = async(req, res) =>{
    try{
            //extract title and desxcription from request body 
            const {title,description} = req.body;
            //create a new Todo Obj and insert in DB
            const response = await Todo.create({title,description}); // .create se insert kar diya db me
            //send a json response with a success flag
            res.status(200).json(
                {
                    success:true,
                    data:response,
                    message:'Entry Created Successfully'
                }
            );
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}