import { customer } from "../models/customer.js";
// Add CUSTOMER
export const addCustomer = async (req, res) => {
  const { fullName, address, country, pincode } = req.body;
  const saveData = new customer({
    fullName,
    address,
    country,
    pincode,
  });
  try {
    await saveData.save();
    res.status(200).json({ message: "Customer Added Sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  }
};

//Get Customer
export const getCustomer = async (req, res) => {
  try {
    const customers = await customer.find().sort({ createdAt: -1 });
    res.status(200).json({ customers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "failed" });
  }
};

// Get Customer by Id
export const getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    const customers = await customer.findById(id);
    if (!customers) {
      return res.status(404).json({ message: "Customer Not Found" });
    }
    res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Update Customer
export const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const { fullName, address, country, pincode } = req.body;
  try {
    const updatedata = {
      fullName,
      address,
      country,
      pincode,
    };
    const updatedCustomer = await customer.findByIdAndUpdate(id, updatedata, {
      new: true,
    });

    if (!updatedCustomer) {
      return res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({
      updateMember: updateCustomer,
      message: "Customer Updated Sucessfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `${error}` });
  }
};

// Delete Customer
export const deleteCustomer = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedCustomer = await customer.findByIdAndDelete(id);
    if (!deletedCustomer) {
      return res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Customer Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Search Customer
export const searchCustomer = async (req, res) => {
  const searchTerm = req.query.q; // Assuming 'q' as the search parameter
  try {
    const results = await blogPost.find({
      $or: [
        { fullname: { $regex: searchTerm, $options: "i" } },
        { address: { $regex: searchTerm, $options: "i" } },
        { country: { $regex: searchTerm, $options: "i" } },
        { pincode: { $regex: searchTerm, $options: "i" } },
      ],
    });

    res.json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
