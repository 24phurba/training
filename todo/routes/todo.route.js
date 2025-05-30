const express = require("express");
const todoController = require("../controllers/todo.controller");
const verifyAuth = require("../middlewares/verifyAuth.middleware");
const todoRoutes = express.Router();

todoRoutes.post("/", verifyAuth, todoController.createTodo);
todoRoutes.get("/",verifyAuth,todoController.getAllTodos);
todoRoutes.get("/:id", verifyAuth,todoController.getTodoById);
todoRoutes.delete("/:id", verifyAuth,todoController.deleteTodoById);
todoRoutes.put("/:id", verifyAuth,todoController.updateTodoById);


module.exports = todoRoutes;
