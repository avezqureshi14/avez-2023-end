const AppDetails = require("../models/App"); // Adjust the path based on your project structure

// Controller to add app details to the database
const addAppDetails = async (req, res) => {
  try {
    const {title} = req.body;
    const newAppDetails = new AppDetails({title});
    const savedAppDetails = await newAppDetails.save();
    res.status(201).json({ success: true, data: savedAppDetails });
  } catch (error) {
    console.error("Error adding app details:", error);
    // Send an error response
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const getApps = async (req, res) => {
  try {
    const apps = await AppDetails.find();
    res.status(200).json({ apps });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { addAppDetails, getApps };
