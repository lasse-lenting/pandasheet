import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Link, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import AddProductForm from './components/AddProductForm';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 3;

  const searchProducts = async (searchTerm, page) => {
    const response = await axios.get(
      `https://pandasheet.vavy.repl.co/api/products?search=${searchTerm}&limit=${productsPerPage}&skip=${
        (page - 1) * productsPerPage
      }`
    );
    setProducts(response.data);
  };

  useEffect(() => {
    searchProducts('', currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1 className="text-center">Product Search</h1>
      <Link className="d-block text-center mb-3" to="/add">
        Add Product
      </Link>
      <SearchBar onSearch={(searchTerm) => searchProducts(searchTerm, 1)} />
      <ProductList products={products} />
      <nav aria-label="Page navigation" className="d-flex justify-content-center mt-4">
      <ul className="pagination">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        <li className="page-item active" aria-current="page">
          <span className="page-link">{currentPage}</span>
        </li>
        <li className="page-item">
          <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  </div>
);
};

const AddProductPage = () => {
return (
  <div>
    <h1 className="text-center">Add Product</h1>
    <Link className="d-block text-center mb-3" to="/">
      Back to Home
    </Link>
    <AddProductForm />
  </div>
);
};

const App = () => {
return (
  <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/add" element={<AddProductPage />} />
    </Routes>
  </div>
);
};

export default App;
