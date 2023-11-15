const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog',
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

commentSchema.virtual('commenter', {
  ref: 'User',
  localField: 'user',
  foreignField: '_id',
  justOne: true,
});

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
