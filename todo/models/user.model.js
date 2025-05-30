const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    phoneNumber: Number,
    email: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
