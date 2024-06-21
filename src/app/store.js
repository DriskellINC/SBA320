import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';

//importing files and exporting files

export const store = configureStore({
    reducer: {
      products: productsReducer
    }
  });

