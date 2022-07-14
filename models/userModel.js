const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    typer: String,
    require: [true, "User must have a username"],
    unique: true,
  },
  password: {
    typer: String,
    require: [true, "User must have a password"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
