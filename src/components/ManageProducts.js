// components/ManageProducts.js
import React, { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore"; // Firestore functions
import { db } from "../firebase"; // Firestore database instance
import './ManageProducts.css'; // Import the CSS file for styling

function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "" });

  // Fetch products from Firestore when the component loads
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productCollection = collection(db, "products"); // 'products' collection in Firestore
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(), // Get product data from Firestore
        }));
        setProducts(productList); // Update state with the fetched products
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to add a new product to Firestore
  const addProduct = async () => {
    try {
      if (newProduct.name && newProduct.price) {
        const productRef = collection(db, "products");
        await addDoc(productRef, {
          name: newProduct.name,
          price: parseFloat(newProduct.price), // Ensure price is stored as a number
        });
        setNewProduct({ name: "", price: "" }); // Clear the input fields
        window.location.reload(); // Refresh the page to show the new product (or handle refresh better)
      }
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  // Function to delete a product from Firestore
  const deleteProduct = async (id) => {
    try {
      const productDocRef = doc(db, "products", id);
      await deleteDoc(productDocRef);
      window.location.reload(); // Refresh to reflect the deletion (or handle refresh better)
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  return (
    <div className="manage-products-container">
      <h2>Manage Products</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            {product.name} - ${product.price}
            <button className="delete-button" onClick={() => deleteProduct(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManageProducts;
