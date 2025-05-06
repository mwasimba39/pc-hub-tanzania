import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/productCard/productCard';

import './Products.css';

const Products = () => {
  return (
    <div className="products-page">
      <div className="container">
        <h2 className="section-title">Products</h2>
        <div className="products-list">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
