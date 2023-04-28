const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  url: String,
  price: Number,
});

module.exports = mongoose.model('Product', productSchema);
