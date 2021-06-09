import mongoose from "mongoose";

const coolchatSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  recieved: Boolean,
});

export default mongoose.model("messagecollections", coolchatSchema);
