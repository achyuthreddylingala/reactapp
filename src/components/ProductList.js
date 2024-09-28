// components/ProductList.js
import React from "react";
import './ProductList.css'; // Import the CSS file for styling

const initialProducts = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
  { id: 3, name: "Product 3", price: 20 },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list-container">
      <h2>Available Products</h2>
      <ul className="product-list">
        {initialProducts.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price}
            <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
