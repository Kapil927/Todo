const Todo = require("../Modles/Todo"); 

// define route handler / bussiness logic / controller
 
exports.updateTodo = async(req, res) =>{
    try{
  
            const {id} = req.params; // const id = req.params.id; ese bhi nakal sakte hai
            const {title,description} = req.body; // body me hum updated wala bhejen ge na 
            const Data = await Todo.findByIdAndUpdate({_id : id},
                {title,description, updatedAt: Date.now()}); // data to be updated
            res.status(200).json(
                {
                    success : true,
                    data : Data,
                    message : `Data with id : ${id} updated Successfully`
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