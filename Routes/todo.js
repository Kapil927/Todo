const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../Controllers/createTodo"); // ye routes ke ander controller import karte time  {} usr karna mat bhulna
const {getAllTodo, getTodoById} = require("../Controllers/getAllTodo");
const {updateTodo} = require('../Controllers/updateTodo');
const {deleteTodo} = require('../Controllers/deleteTodo');

//define APi routes
router.post("/createTodo", createTodo); // link route and controller
router.get("/getTodos",getAllTodo);
router.get("/getTodos/:id",getTodoById);
router.put("/updateTodos/:id", updateTodo);
router.delete('/deleteTodo/:id', deleteTodo );

module.exports = router;