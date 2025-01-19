const mongoose = require('mongoose');
const Todo = require('../models/todo-model');


const addTodo = async (req, resp)=>{

    try {
    const TodoTask = new Todo(req?.body);
    await TodoTask.save();
    console.log('TodoTask added to DB successfully : ', TodoTask);

    resp.status(200).json({
        success : true,
        message : "Todo task added Successfully to the DB",
        data : TodoTask
    })
        
    } catch (error) {
        console.log(`Error occured while adding a Todo Task, due to `, error);

        resp.status(500).json({
            success : false,
            message : "Internal Server Error",
            data : {}
        })
    }

}



const fetchAllTodos = async (req, resp)=>{


    try {
        const todoList = await Todo.find({});
        console.log('todoList : ', todoList);

        console.log("req.url ", req?.url);
        resp.status(200).json({
            success : true,
            message : "List of All products ",
            data : todoList
        })
    } catch (error) {
        console.log(`Error occured while fetch all todos , due to `, error);

        resp.status(500).json({
            success : false,
            message : "Internal Server Error",
            data : {}
        })
    }




}


const updateTodo = async (req, resp)=>{

    try {
        const {id, completed} = req.body;
        console.log("reqbody : ", req.body);
        const updatedTodo = await Todo.findByIdAndUpdate(id, {completed});
        console.log("todo updated successfully", updatedTodo);

        resp.status(201).json({
            success : true,
            message : "",
            data : updatedTodo
        })


    } catch (error) {
        console.log(`Error occured while updating the todo , due to `, error);

        resp.status(500).json({
            success : false,
            message : "Internal Server Error",
            data : {}
        })
    }



}



const removeTodo = async (req, resp)=>{

    
    
    try {
        const {id} = req.body;
        console.log("resp body for del : ", req.body);
        const deletedTodo = await Todo.findByIdAndDelete(id);
        console.log("todo deleted successfully", deletedTodo);

        resp.status(200).json({
            success : true,
            message : "",
            data : deletedTodo
        })


    } catch (error) {
        console.log(`Error occured while deleting the todo , due to `, error);

        resp.status(500).json({
            success : false,
            message : "Internal Server Error",
            data : {}
        })
    }





}


const fetchInProgressTodos = async (req, resp)=>{

    try {

        // Since it's just a get req, I didnt' put any option to send body for get request.
        console.log("req body : ", req.body);
        const inprogressTasks =   await Todo.find({completed : false});
        console.log("Inprogress todo tasks : ", inprogressTasks);

        resp.status(200).json({
            success : true,
            message : "",
            data : inprogressTasks
        })


        
    } catch (error) {
        console.log(`Error occured while fetching the inprogress todos, due to : `, error);

        resp.status(500).json({
            success : false,
            message : "INTERNAL SERVER ERROR",
            data : {}
        })
    }


}


const fetchFinishedTodos = async (req, resp)=>{

    try {

        // Since it's just a get req, I didnt' put any option to send body for get request.
        console.log("req body : ", req.body);
        const inprogressTasks =   await Todo.find({completed : true});
        console.log("Inprogress todo tasks : ", inprogressTasks);

        resp.status(200).json({
            success : true,
            message : "",
            data : inprogressTasks
        })


        
    } catch (error) {
        console.log(`Error occured while fetching the inprogress todos, due to : `, error);

        resp.status(500).json({
            success : false,
            message : "INTERNAL SERVER ERROR",
            data : {}
        })
    }


}


module.exports = {addTodo, fetchAllTodos, updateTodo, removeTodo, fetchInProgressTodos, fetchFinishedTodos};