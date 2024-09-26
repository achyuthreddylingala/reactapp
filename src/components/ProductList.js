// components/ProductList.js
import React, { useState } from "react";

const initialProducts = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 15 },
  { id: 3, name: "Product 3", price: 20 },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Available Products</h2>
      <ul>
        {initialProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
