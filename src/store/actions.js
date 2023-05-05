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
    }
  }
});


export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
