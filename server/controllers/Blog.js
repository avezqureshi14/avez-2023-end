const Blog = require('../models/Blog');
const mongoose = require("mongoose")
// Create a new blog
const createBlog = async (req, res) => {
  const { title, content, category, image } = req.body;
  const creator = req.userId; // Assign the userId to the creator field

  const newBlog = new Blog({
    title,
    content,
    category,
    image,
    creator, // Associate the blog with the user
    createdAt: new Date().toISOString(),
  });

  try {
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateBlog = async (req, res) => {
  const { id } = req.params; // Get the blog ID from request parameters
  const { title, content, category, image } = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, { title, content, category, image }, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params; // Get the blog ID from request parameters

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }).populate('category');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getBlogById = async (req, res) => {
  const { id } = req.params; // Extract the blog ID from the request parameters

  try {
    const blog = await Blog.findById(id).populate('category'); // You can also populate the category if needed
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const likeBlog = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.status(401).json({ message: 'Unauthenticated' });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No blog with id: ${id}`);
  }

  try {
    const blog = await Blog.findById(id);

    // Check if the user has already liked this blog post
    const index = blog.likes.findIndex((userId) => userId === String(req.userId));

    if (index === -1) {
      // If the user has not liked the post, add their ID to the likes array
      blog.likes.push(req.userId);
    } else {
      // If the user has already liked the post, remove their ID from the likes array
      blog.likes = blog.likes.filter((userId) => userId !== String(req.userId));
    }

    // Update the blog post with the modified likes array
    const updatedBlog = await Blog.findByIdAndUpdate(id, blog, { new: true });

    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};


const getBlogsByCategory = async (req, res) => {
  const { categoryId } = req.params; // Retrieve categoryId from request params

  try {
    // Validate if the provided categoryId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ error: 'Invalid categoryId format' });
    }

    // Continue with the query if the categoryId is valid
    const blogs = await Blog.find({ category: categoryId }).populate('category');

    if (!blogs || blogs.length === 0) {
      console.log('No blogs found for this category ID');
      return res.status(404).json({ message: 'No blogs found for this category ID' });
    }

    return res.status(200).json({ blogs });
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    return res.status(500).json({ error: 'Error fetching blogs by category' });
  }
};

const getBlogsByUserId = async (req, res) => {
  const userId = req.params.userId;

  try {
    // Assuming 'Blog' model is used and has a 'creator' field for the user ID
    const blogs = await Blog.find({ creator: userId });

    res.status(200).json({ blogs });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const commentPost = async (req, res) => {
    const { id } = req.params;
    const { value } = req.body;

    const post = await Blog.findById(id);

    post.comments.push(value);

    const updatedPost = await Blog.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
};

module.exports = {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  likeBlog,
  commentPost,
  getBlogsByCategory,
  getBlogsByUserId,
};
