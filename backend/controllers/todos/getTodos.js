const Todo = require("../../models/todoModel");

exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).json({
      success: true,
      message: "got all todos successfully",
      allTodos,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
