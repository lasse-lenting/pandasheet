const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product');

const app = express();
app.use(cors());
app.use(express.json());

// Replace the following string with your MongoDB connection string
const uri = 'mongodb+srv://lasselenting:Lasse2323@cluster0.azvufzr.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/api/products', async (req, res) => {
  const search = req.query.search || '';
  const products = await Product.find({ name: new RegExp(search, 'i') });
  res.json(products);
});
app.post('/api/products', async (req, res) => {
    const { name, imageUrl, url } = req.body;
  
    if (!name || !imageUrl || !url) {
      return res.status(400).json({ message: 'All fields are required' });
    }
  
    const newProduct = new Product({ name, imageUrl, url });
    await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
