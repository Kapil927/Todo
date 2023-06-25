 // with File Structure
 const express = require("express");
const app = express();

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 3000;

//middleware to parse json request body
app.use(express.json());

//import routes for TODO API
const todoRoutes = require("./Routes/todo");

//mount the todo API routes
app.use("/api/v1", todoRoutes); // pehle ye route ae ga  /api/v1", phir ye wala shuru ho jae ga todoRoutes . linking 

 
//start server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`); 
})

//connect to the database
const dbConnect = require("./Config/Database");
dbConnect();

//default Route
app.get("/", (req,res) => {
    res.send(`<h1> This is HOMEPAGE baby</h1>`);
})