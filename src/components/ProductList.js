// components/ProductList.js
import React from 'react';
import ProductListItem from './ProductListItem';

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <ProductListItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
