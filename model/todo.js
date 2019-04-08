const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
   description: {
      type: String,
      required: true
   },
   responsible: {
      type: String,
      required: true
   },
   priority: {
      type: String,
      required: true
   },
   completed: {
      type: Boolean,
      default: false
   }
})
const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;