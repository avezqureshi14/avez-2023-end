const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false, // You can adjust this based on your requirements
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: false, // You can adjust this based on your requirements
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // Reference to the Category model
    required: false, // Adjust based on your requirements
  },
});

module.exports = mongoose.model("User", userSchema);
