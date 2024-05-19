const express = require("express");
const { getallPorduct, createProduct } = require("../Controllers/productController");
const router = express.Router();


router.route("/product").get(getallPorduct);
router.route("/product/new").post(createProduct)


module.exports = router;

