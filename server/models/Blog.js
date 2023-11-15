const mongoose = require('mongoose');
const Category = require('./Category'); // Import the Category model

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  likes: { type: [String], default: [] },
  comments: [
    {
      type: [String],
      default: []
    }
  ],
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
