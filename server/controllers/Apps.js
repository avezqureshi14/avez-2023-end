const AppDetails = require("../models/App"); // Adjust the path based on your project structure

// Controller to add app details to the database
const addAppDetails = async (req, res) => {
  const { title} = req.body;
  const newApp = new AppDetails({
    title
  });
  try {
    await newApp.save();
    res.status(201).json(newApp);
  } catch (error) {
    res.status(409).json({ message: error.message });
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
