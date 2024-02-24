const mongoose = require('mongoose');

const appSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const App = mongoose.model('App', appSchema);

module.exports = App;
