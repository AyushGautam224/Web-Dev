import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean
});

export default mongoose.model("Todo", todoSchema);
