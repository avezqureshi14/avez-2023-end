import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    enum: ["India", "America", "Japan", "China", "Brazil"],
  },
  pincode: {
    type: String,
    required: true,
  },
});

export const customer = mongoose.model("customer", customerSchema);
