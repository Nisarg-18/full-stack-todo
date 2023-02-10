const Todo = require("../../models/todoModel");

exports.createTodo = async (req, res) => {
  try {
    const title = req.body.title;
    const tasks = req.body.tasks;

    if (title) {
      const todo = await Todo.create({
        title: title,
        tasks: tasks,
      });
      res.status(200).json({
        success: true,
        message: "todo created successfully",
        todo,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "title is required",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
