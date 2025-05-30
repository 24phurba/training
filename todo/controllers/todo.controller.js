const todoService = require("../services/todo.service");

const deleteTodoById = async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  const isDeletd = await todoService.deleteTodoById(id, user._id);
  if (isDeletd) {
    res.json({ message: `Todo ${id} deleted successfully` });
  } else {
    res.status(404).json({ message: `Todo with ${id} not found` });
  }
};

const getAllTodos = async (req, res) => {
  const user = req.user;
  const { completed } = req.query;

  const filter = {};
  if (completed !== undefined) {
    filter.completed = completed === "true";
  }
  const todos = await todoService.getAllTodos(user._id, filter);
  res.json({ todos });
};
const createTodo = async (req, res) => {
  const user = req.user;
  if (!req.body) {
    return res.status(400).json({
      message: "Body cannot be empty",
    });
  }
  const newTask = req.body;
  const keys = Object.keys(newTask);
  const requireKeys = ["title", "description", "note", "completed"];
  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all information: ${missingKeys.join(".")}`,
    });
  }

  const createdTask = await todoService.createdTodo(newTask, user._id);

  res.status(201).json({ message: "new TODO created", todo: createdTask });
};

const getTodoById = async (req, res) => {
  const id = req.params.id;
  const user = req.user;
  const task = await todoService.getTodoById(id, user._id);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ mesage: `todo with the id: ${id} not found` });
  }
};

const updateTodoById = async (req, res) => {
  const user = req.user;
  const id = req.params.id;
  if (!req.body) {
    return res.status(400).json({
      message: `Boby cannot be empty!`,
    });
  }

  const newTodo = req.body;
  const keys = Object.keys(newTodo);
  const requireKeys = ["title", "description", "note", "completed"];
  const missingKeys = requireKeys.filter((key) => !keys.includes(key));

  if (missingKeys.length > 0) {
    return res.status(400).json({
      message: `Please provide all infromation:${missingKeys.join(".")}`,
    });
  }
  const updateTodo = await todoService.updateTodoById(id, newTodo, user._id);

  if (updateTodo) {
    res.json({
      message: ` Todo ${id} updated sucessfully`,
      todo: updateTodo,
    });
  } else {
    res.status(400).json({ message: ` Todo ${id} not found` });
  }
};
module.exports = {
  createTodo,
  getAllTodos,
  getTodoById,
  deleteTodoById,
  updateTodoById,
};
