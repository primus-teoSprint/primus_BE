const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  kakaoId: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  profileImage: String,
});

module.exports = mongoose.model("User", userSchema, "user");
