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
                <div class="title-bar-controls">
                  <button aria-label="Minimize"></button>
                  <button aria-label="Maximize"></button>
                  <button aria-label="Close"></button>
                </div>
              </div>
              <div className="window-body d-flex flex-column align-items-center justify-content-between">
                <div className="product-card-img-container">
                  <img
                    src={product.imageUrl}
                    className="img-fluid product-card-img"
                    alt={product.name}
                  />
                </div>
                <p className="product-card-price">${product.price && product.price.toFixed(2)}</p>
                <button onClick={() => window.location.href = product.url} className="button">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
