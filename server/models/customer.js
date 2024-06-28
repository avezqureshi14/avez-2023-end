const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const customerSchema = new mongoose.Schema({
  id: { type: Number },
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  country: { type: String, required: true },
  pincode: { type: String, required: true }
});

customerSchema.plugin(AutoIncrement, { inc_field: 'id' });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
