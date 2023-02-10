const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    require: [true, "title is required"],
  },
  tasks: {
    type: [String],
  },
});

module.exports = mongoose.model("Todos", todoSchema);
