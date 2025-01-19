const express = require('express');
const {addTodo, fetchAllTodos, updateTodo, removeTodo, fetchInProgressTodos, fetchFinishedTodos} = require('../controllers/todos-controller');


const TodosRouter = express.Router();

TodosRouter.get('/getalltodos', fetchAllTodos);
TodosRouter.get('/getinprogresstodos', fetchInProgressTodos);
TodosRouter.get('/getfinishedtodos', fetchFinishedTodos);

TodosRouter.post('/addtodo', addTodo);
TodosRouter.put('/updatetodo', updateTodo);
TodosRouter.delete('/removetodo', removeTodo);




module.exports = TodosRouter;



