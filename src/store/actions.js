import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item.code === action.payload.code);
      if (!existingItem) {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex(item => item.code === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    updateQuantity: (state, action) => {
      const itemToUpdate = state.find((item) => item.code === action.payload.code);
      if (itemToUpdate) {
        itemToUpdate.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      return [];
    },
  }
});



export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
