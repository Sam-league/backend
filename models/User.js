import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  user_name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500,
  },
  user_email: {
    type: String,
    unique: true,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
  password: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Cashier"],
    default: "User",
  },
  isVerified: Boolean,
});

export default new mongoose.model("users", userSchema);
