const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

  productName: { type: String },
  productPrice: { type: String },
  productDesc: { type: String }
}, { timestamps: true })

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;