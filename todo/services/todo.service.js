const Todo = require("../models/todo.model");

const deleteTodoById = async (id, loggedInUserId) => {
  const deleted = await Todo.deleteOne({ _id: id, userId: loggedInUserId });

  if (deleted.deletedCount > 0) {
    return true;
  } else {
    return false;
  }
};

const createdTodo = async (newTask, loggedInUserId) => {
  newTask.userId = loggedInUserId;
  const savedTodo = await Todo.create(newTask);
  return savedTodo;
};

const getAllTodos = async (loggedInUserId, filter = {}) => {
  const tasks = await Todo.find({ userId: loggedInUserId, ...filter });
  return tasks;
};

const getTodoById = async (id, loggedInUserId) => {
  const task = await Todo.findOne({ _id: id, userId: loggedInUserId });
  return task;
};

const updateTodoById = async (id, newTask, loggedInUserId) => {
  const update = await Todo.updateOne(
    { _id: id, userId: loggedInUserId },
    { $set: newTask }
  );
  if (update.matchedCount > 0) {
    const updateTodo = await Todo.findOne({ _id: id });
    return updateTodo;
  } else {
    return;
  }
};

module.exports = {
  createdTodo,
  getAllTodos,
  getTodoById,
  deleteTodoById,
  updateTodoById,
};
