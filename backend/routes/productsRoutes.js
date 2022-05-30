const express = require("express");
const router = express.Router();
const { getAllProducts, getProductById, deleteProduct, updateProduct } = require("../controllers/productsController.js");

router.get("/", getAllProducts );
router.get("/:id", getProductById );
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct)

module.exports = router;