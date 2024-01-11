// App.js
import React, { useState, useEffect } from 'react';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from the public folder
    fetch('/products.json')  // Assuming products.json is in the public folder
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching product data:', error));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default App;
