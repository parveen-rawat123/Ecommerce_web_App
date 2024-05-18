const express = require("express");
const { getallPorduct } = require("../Controllers/productController");
const router = express.Router();


router.route("/product").get(getallPorduct)


module.exports = router

