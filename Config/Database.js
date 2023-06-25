const mongoose = require("mongoose"); //backend import style

require("dotenv").config(); // jo bhi .env ke ander define kiya hoga, vo aa jaega process object ke ander. process object ke ander .env file load ho jae gi
                            // jo bhi .env file ke ander jo bhi configuration hai n vo load kar deta hai process object k ander.
const dbConnect = ()=>{
    mongoose.connect(process.env.Databse_URL, { // is process object ke ander .env data dlane ke liye dotenv library use karo.
        useNewUrlParser:true, //no why
        useUnifiedTopology:true //no why
    })
    .then(() => {console.log("Connection Successful")})
    .catch( (error) => {
        console.log("Recieved an error");
        console.error(error.message);
        process.exit(1); //  if you want to exit with success use 0 if you want to exit with failure use 1.
    });
}
module.exports = dbConnect; // backend export style 