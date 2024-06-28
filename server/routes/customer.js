import { addCustomer, deleteCustomer, getCustomer, getCustomerById, updateCustomer } from "../controllers/customer";

const express = require("express");
export const customerRouter = express.Router();
customerRouter.post("/", addCustomer);
customerRouter.get("/", getCustomer);
customerRouter.get("/:id", getCustomerById);
customerRouter.delete("/:id", deleteCustomer);
customerRouter.put("/:id", updateCustomer);
