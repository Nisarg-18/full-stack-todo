const Todo = require("../../models/todoModel");

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findByIdAndDelete(id);
    if (todo) {
      res.status(200).json({
        success: true,
        message: "todo deleted successfully",
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
