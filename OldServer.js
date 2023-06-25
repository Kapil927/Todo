 // without File Structure..
const express = require('express'); // created instance of express. require function is used to import
const app = express(); //express ka single instance initiate kar diya and uska name app  rakh diya . or we can say server instanciate kiya hai. Server is created but is not live yet.

app.listen(3000, ()=>{ //to run server on port no 3000 , Now server is live on port 3000
    console.log("Server started at port 3000")
})
app.get('/', function (req, res) { // jb bhi server pe is route '/' pe ao ge to response me ye string 'Hello World!' mil jae gi
    res.send('Hello World!')
     })

const bodyParser = require('body-parser'); //used to process data sent in an HTTP request body . REQUEST ki body ke sath data bhejne ke liye use karte hai   , use hor PUT & POST requests 
app.use(bodyParser.json()); //mtlb json type ka data bhejna hai.  It provides four express middleware for parsing Text, JSON, URL-encoded, and raw data sets over an HTTP request body.
 app.post('/api/cars',(req, res)=>{
    const {name, brand} = req.body;
    console.log(name);
    console.log(brand);
    
 res.send('Car submitted successfully')
 })     

 //Mongoose is a Node. js-based Object Data Modeling (ODM) library for MongoDB, we are using it to connect our Express Server with mongoDB .
 const mongoose = require('mongoose'); // created instance of mongoose 

 mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', { //  babber ye likhwaya but did/t worked- mongodb://localhost:27017/myDatabase
     useNewUrlParser:true, //no why
     useUnifiedTopology:true //no why
 }) //it returns a promise so..
 .then(() => {console.log("Connection Successful")})
 .catch( (error) => {console.log("Recieved an error")} );