const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/Category');

// Create a new category
categoryRouter.post('/', categoryController.createCategory);
categoryRouter.get('/', categoryController.getAllCategories);

module.exports = categoryRouter;
