const Product = require("../models/productmodel");


//create product 
exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({ success: true, product })
};






exports.getallPorduct = (req, res) => {
  res.status(200).json({ message: 'route is working' })
}