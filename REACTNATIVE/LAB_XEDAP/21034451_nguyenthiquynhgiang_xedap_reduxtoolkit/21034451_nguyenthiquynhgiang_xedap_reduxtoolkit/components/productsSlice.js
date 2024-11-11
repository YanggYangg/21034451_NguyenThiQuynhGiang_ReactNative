import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, img: require('../assets/bicycle.png'), name: 'Xe', price: '100', category: 'All' },
    { id: 2, img: require('../assets/bicycle01.png'), name: 'Xe01', price: '150', category: 'RoadBike' },
    { id: 3, img: require('../assets/bicycle02.png'), name: 'Xe02', price: '200', category: 'Mountain' },
    { id: 4, img: require('../assets/bicycle03.png'), name: 'Xe03', price: '250', category: 'Mountain' },
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
    addProduct: (state, action) => {
      state.products.push({
        id: state.products.length + 1,
        ...action.payload,
      });
     },
    editProduct: (state, action) => {
      const { id, updatedData } = action.payload;
      const productIndex = state.products.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        state.products[productIndex] = {
          ...state.products[productIndex],
          ...updatedData,
        };
      }
    },
    deleteProduct: (state, action) => {
      const productId = action.payload;
      state.products = state.products.filter(product => product.id !== productId);
    },
  },
});

export const { setFilter, toggleFavorite, addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;