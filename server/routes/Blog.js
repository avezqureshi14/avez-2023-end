const express = require("express");
const router = express.Router();
const blogController = require("../controllers/Blog");
const auth = require("../middleware/auth");

router.post("/", auth, blogController.createBlog);
router.get("/", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.get("/category/:categoryId", blogController.getBlogsByCategory);
router.patch("/:id/likePost", auth, blogController.likeBlog);
router.post("/:id/commentPost", auth, blogController.commentPost);
router.put("/:id", auth, blogController.updateBlog);
router.delete("/:id", auth, blogController.deleteBlog);
router.get("/user/:userId", blogController.getBlogsByUserId);
module.exports = router;
