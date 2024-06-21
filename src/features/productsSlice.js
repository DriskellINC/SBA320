import { createSlice } from '@reduxjs/toolkit';
//imported from redux

const initialState = {
    products: [
      { id: 1, name: 'Cropped Stay Groovy off white', price: 10.90, installments: '9 x $1.21', imageUrl: 'path_to_image_1' },
      { id: 2, name: 'Basic Cactus White T-shirt', price: 13.25, installments: '3 x $4.42', imageUrl: 'path_to_image_2' },
      { id: 3, name: 'Skater Black Sweatshirt', price: 25.90, installments: '12 x $2.16', imageUrl: 'path_to_image_3' },
      { id: 4, name: 'Black Tule Oversized', price: 29.45, installments: '5 x $5.89', imageUrl: 'path_to_image_4' }
    ],
    sizes: ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'],
    selectedSize: null
  };

  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      selectSize: (state, action) => {
        state.selectedSize = action.payload;
      }
    }
  });

  export const { selectSize } = productsSlice.actions;
export default productsSlice.reducer;

