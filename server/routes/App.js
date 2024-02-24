const express = require("express");
const router = express.Router();
const appController = require("../controllers/Apps");
// Create a new blog
router.post("/",  appController.addAppDetails);
router.get("/",  appController.getApps);


module.exports = router;