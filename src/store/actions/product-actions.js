import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return [...action.payload]
        },
        clearProducts: (state) => {
            return [];
        },
        removeFromProduct: (state, action) => {
            const index = state.findIndex(item => item.code === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
        },
        editProduct: (state, action) => {
            const index = state.findIndex(item => item.code === action.payload.code);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    }
});
export const { setProducts, clearProducts,removeFromProduct,editProduct } = productSlice.actions;

export default productSlice.reducer;