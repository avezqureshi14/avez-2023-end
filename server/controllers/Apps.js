const AppDetails = require("../models/App"); // Adjust the path based on your project structure

// Controller to add app details to the database
const addAppDetails = async (req, res) => {
  try {
    const {
      title,
      description,
      installs,
      minInstalls,
      maxInstalls,
      score,
      ratings,
      reviews,
      price,
      free,
      currency,
      priceText,
      available,
      offersIAP,
      IAPRange,
      androidVersion,
      developer,
      developerId,
      developerEmail,
      developerWebsite,
      developerAddress,
      privacyPolicy,
      genre,
      icon,
      headerImage,
      screenshots,
      video,
      videoImage,
      previewVideo,
      contentRating,
      contentRatingDescription,
      adSupported,
      released,
      updated,
      version,
      recentChanges,
      comments,
      preregister,
      earlyAccessEnabled,
      isAvailableInPlayPass,
      appId,
      url,
    } = req.body;
    const newAppDetails = new AppDetails({
      title,
      description,
      installs,
      minInstalls,
      maxInstalls,
      score,
      ratings,
      reviews,
      price,
      free,
      currency,
      priceText,
      available,
      offersIAP,
      IAPRange,
      androidVersion,
      developer,
      developerId,
      developerEmail,
      developerWebsite,
      developerAddress,
      privacyPolicy,
      genre,
      icon,
      headerImage,
      screenshots,
      video,
      videoImage,
      previewVideo,
      contentRating,
      contentRatingDescription,
      adSupported,
      released,
      updated,
      version,
      recentChanges,
      comments,
      preregister,
      earlyAccessEnabled,
      isAvailableInPlayPass,
      appId,
      url,
    });
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
