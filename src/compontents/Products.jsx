import React from 'react';
import { useSelector } from 'react-redux';
import './Products.css';

const Products = () => {
    const products = useSelector((state) => state.products.products);
    return (
        <div className="products-container">
          <h2>{products.length} Product(s) found</h2>
          <div className="products">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <p>{product.installments}</p>
              </div>
            ))}
          </div>
        </div>
      );
    };