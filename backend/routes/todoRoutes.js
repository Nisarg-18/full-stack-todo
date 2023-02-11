const express = require("express");
const { createTodo } = require("../controllers/todos/createTodo");
const { deleteTodo } = require("../controllers/todos/deleteTodo");
const { getTodo } = require("../controllers/todos/getTodo");
const { getAllTodos } = require("../controllers/todos/getTodos");
const { home } = require("../controllers/homeController");
const { updateTodo } = require("../controllers/todos/updateTodo");
const { createTask } = require("../controllers/tasks/createTask");
const { editTask } = require("../controllers/tasks/editTask");
const { deleteTask } = require("../controllers/tasks/deleteTask");

const todoRouter = express.Router();

// home
todoRouter.get("/", home);

// to-do
todoRouter.post("/createTodo", createTodo);
todoRouter.get("/allTodos", getAllTodos);
todoRouter.get("/todo/:id", getTodo);
todoRouter.put("/editTodo/:id", updateTodo);
todoRouter.delete("/deleteTodo/:id", deleteTodo);

// tasks
todoRouter.post('/todo/:id/createTask', createTask);
todoRouter.put('/todo/:id/editTask/:taskId', editTask);
todoRouter.delete('/todo/:id/deleteTask/:taskId', deleteTask);

module.exports = todoRouter;
