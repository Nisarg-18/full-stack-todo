const Todo = require("../../models/todoModel");

exports.createTask = async (req, res) => {
  try {
    const todoId = req.params.id;
    const todo = await Todo.findById(todoId);
    if (todo) {
      await todo.tasks.push(req.body.tasks);
      await todo.save();
      res.status(200).json({
        success: true,
        message: "task created successfully",
        todo,
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
