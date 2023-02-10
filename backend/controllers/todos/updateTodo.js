const Todo = require("../../models/todoModel");

exports.updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndUpdate(id, req.body);
    if (todo) {
      res.status(200).json({
        success: true,
        message: "updated the todo successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "todo does not exists",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
