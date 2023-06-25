const Todo = require('../Modles/Todo'); // schema chakleaaoo

exports.getAllTodo = async(req, res)=>{
    try{
        const AllData = await Todo.find({}); // to get all data
        res.status(200).json(
            {
                success:true,
                data:AllData,
                message:'All Data Fetched Successfully'
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

exports.getTodoById = async(req, res)=>{ // ise alag file me bnana chahiye, per yr janane ke liye ki sare controller ek file me bhi likh sakte hai is liye yahin likh diya
    try{
        const id = req.params.id; // const {id} = req.params; destructuring karke bhi nakal sakte hai
        const Data = await Todo.findById({_id : id}); // to get all data

        if(!Data){ // if not found., per ye condition chali nahi seedha error catch ho jata hai
            return res.status(404).json(
                {
                    
                success : false,
                message:`Data with id :${id} not Found`
                }
            ) 
        }
        res.status(200).json(
            {
                success:true,
                data:Data,
                message:`Data with id :${id} Fetched Successfully`
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