const express = require("express");
const { createTodo } = require("../controllers/todos/createTodo");
const { deleteTodo } = require("../controllers/todos/deleteTodo");
const { getTodo } = require("../controllers/todos/getTodo");
const { getAllTodos } = require("../controllers/todos/getTodos");
const { home } = require("../controllers/homeController");
const { updateTodo } = require("../controllers/todos/updateTodo");

const todoRouter = express.Router();

todoRouter.get("/", home);
todoRouter.post('/createTodo', createTodo);
todoRouter.get('/allTodos', getAllTodos);
todoRouter.get('/todo/:id', getTodo);
todoRouter.put('/editTodo/:id', updateTodo);
todoRouter.delete('/deleteTodo/:id', deleteTodo);

module.exports = todoRouter;
