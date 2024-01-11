const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  toDo: {
    type: String,
    required: true,
  },
  isdeleted: {
    type: Boolean,
    default: false,
  }
});

module.exports = mongoose.model("ToDo", toDoSchema);