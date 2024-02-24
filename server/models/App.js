const mongoose = require("mongoose");

const appDetailsSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const AppDetails = mongoose.model("AppDetails", appDetailsSchema);

module.exports = AppDetails;
