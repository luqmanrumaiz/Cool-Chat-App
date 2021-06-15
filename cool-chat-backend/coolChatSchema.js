import mongoose from "mongoose";

const coolChatSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  recieved: Boolean,
});

export default coolChatSchema;
