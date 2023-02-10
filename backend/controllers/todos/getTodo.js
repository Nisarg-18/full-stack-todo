const Todo = require("../../models/todoModel");

exports.getTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (todo) {
      res.status(200).json({
        success: true,
        message: "got todo successfully",
        todo,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "todo does not exist",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
