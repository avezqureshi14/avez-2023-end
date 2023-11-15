const express = require('express');
const router = express.Router();
const { toggleBookmark, getBookmarksByUser, getBlogsByBookmarkIds } = require('../controllers/Bookmark');
const auth = require('../middleware/auth');

// POST route to toggle bookmarks
router.post('/toggle', auth, toggleBookmark);
router.get('/', auth, getBookmarksByUser);
router.get('/multiple', auth, getBlogsByBookmarkIds);
module.exports = router;
