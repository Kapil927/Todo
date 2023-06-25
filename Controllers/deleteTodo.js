const Todo = require("../Modles/Todo"); 

// define route handler / bussiness logic / controller
 
exports.deleteTodo = async(req, res) =>{
    try{
  
            const {id} = req.params; // const id = req.params.id; ese bhi nakal sakte hai
                  await Todo.findByIdAndDelete(id);
            res.status(200).json(
                {
                    success : true,
                    message : `Data with id : ${id} Deleted Successfully`
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