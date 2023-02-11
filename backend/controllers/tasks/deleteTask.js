const Todo = require("../../models/todoModel");

exports.deleteTask = async (req, res) => {
  try {
    const todoId = req.params.id;
    const taskId = req.params.taskId;
    const todo = await Todo.findById(todoId);
    if (todo) {
      if (todo.tasks[taskId]) {
        todo.tasks.splice(taskId, 1);
        await todo.save();
        res.status(200).json({
          success: true,
          message: "deleted the task successfully",
        });
      } else {
        res.status(400).json({
          success: false,
          message: "task does not exists",
        });
      }
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
