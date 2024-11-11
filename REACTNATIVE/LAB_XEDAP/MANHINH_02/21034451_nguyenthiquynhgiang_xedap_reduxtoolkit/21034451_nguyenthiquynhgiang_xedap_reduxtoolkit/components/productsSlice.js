import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, img: require('../assets/bicycle.png'), name: 'Xe', price: '100' },
    { id: 2, img: require('../assets/bicycle01.png'), name: 'Xe01', price: '150' },
    { id: 3, img: require('../assets/bicycle02.png'), name: 'Xe02', price: '200' },
    { id: 4, img: require('../assets/bicycle03.png'), name: 'Xe03', price: '250' },
  ],
  filter: 'All',  
  favorites: []   
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      if (state.favorites.includes(productId)) {
        state.favorites = state.favorites.filter(id => id !== productId);
      } else {
        state.favorites.push(productId);
      }
    },
  },
});

export const { setFilter, toggleFavorite } = productsSlice.actions;
export default productsSlice.reducer;