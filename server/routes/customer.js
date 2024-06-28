
const express = require('express');
const customerRouter = express.Router();
const customerController = require('../controllers/customer');
customerRouter.post("/", customerController.addCustomer);
customerRouter.get("/", customerController.getCustomer);
customerRouter.get("/:id", customerController.getCustomerById);
customerRouter.delete("/:id", customerController.deleteCustomer);
customerRouter.put("/:id", customerController.updateCustomer);

module.exports = customerRouter;