const express = require("express");
const userRouter = express.Router();
const userController = require("../controllers/User");

// Create a new blog
userRouter.post("/login", userController.signin);
userRouter.post("/signup", userController.signup);
userRouter.get("/:userId", userController.getUserById);
userRouter.get("/", userController.getAllUsers);
module.exports = userRouter;
