const express = require("express");
const Product = require("../models/product.model");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// get product data
router.get("/", getProducts);
// product by id
router.get("/:id", getProduct);
// upload product data in database
router.post("/", createProduct);
// update Product
router.put("/:id", updateProduct);
//delete product
router.delete("/:id", deleteProduct);

module.exports = router;
