const Bookmark = require("../models/Bookmark");

const toggleBookmark = async (req, res) => {
  const { blog } = req.body;
  const { userId } = req; // Assuming userId is extracted from authentication middleware

  try {
    const existingBookmark = await Bookmark.findOne({ 'blog._id': blog._id, userId });

    if (existingBookmark) {
      // If bookmark exists, remove it
      await Bookmark.findByIdAndRemove(existingBookmark._id);
      res.status(200).json({
        message: "Bookmark removed successfully",
        bookmark: existingBookmark,
      });
    } else {
      // If bookmark doesn't exist, create it
      const newBookmark = new Bookmark({ blog, userId });
      await newBookmark.save();
      res.status(201).json({
        message: "Bookmark added successfully",
        bookmark: newBookmark,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Bookmark operation failed", error: error.message });
  }
};


// Controller to handle fetching bookmarks for a user
const getBookmarksByUser = async (req, res) => {
  const { userId } = req; // Assuming userId is extracted from authentication middleware

  try {
    const bookmarks = await Bookmark.find({ userId }).populate("blogId"); // Populating the blogId field with actual blog details

    res.status(200).json(bookmarks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch bookmarks", error: error.message });
  }
};

const getBlogsByBookmarkIds = async (req, res) => {
  const { blogIds } = req.body; // Assuming you receive an array of blogIds in the request body

  try {
    const blogs = await Blog.find({ _id: { $in: blogIds } });
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
    getBookmarksByUser,
    toggleBookmark,
    getBlogsByBookmarkIds
};
  