import mongoose from "mongoose";

const schema = new mongoose.Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

export default mongoose.model("Message", schema);
