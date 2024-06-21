import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSize } from '../features/products/productsSlice';
import './Sizes.css';

const Sizes = () => {
    const dispatch = useDispatch();
    const sizes = useSelector((state) => state.products.sizes);

    return (
        <div className="sizes-container">
          <h2>Sizes:</h2>
          <div className="sizes">
            {sizes.map((size) => (
              <button key={size} onClick={() => dispatch(selectSize(size))}>
                {size}
              </button>
            ))}
          </div>
        </div>
      );
    };