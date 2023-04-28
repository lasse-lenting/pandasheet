import React from 'react';
import './ProductList.css'; // Import custom CSS for ProductList

const ProductList = ({ products }) => {
  return (
    <div className="container mt-4">
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card-wrapper" key={product._id}>
            <div className="product-card window">
              <div className="title-bar">
                <div className="title-bar-text">{product.name}</div>
              </div>
              <div className="window-body d-flex flex-column align-items-center justify-content-between">
                <img src={product.imageUrl} className="img-fluid" alt={product.name} />
                {product.price && <p>${product.price.toFixed(2)}</p>}
                <a href={product.url} className="button" target="_blank" rel="noopener noreferrer">
                  View Product
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
