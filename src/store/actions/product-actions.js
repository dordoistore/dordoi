import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, API } from '../../contants/API';

// Создаем асинхронное действие
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const response = await axios.get(`${BASE_URL}/${API.products}`);
    return response.data;  // Вернет данные и передаст их в extraReducers в поле fulfilled
});

const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return [...action.payload];  // Заполняем state полученными продуктами
        });
    }
});

export const { clearProducts, removeFromProduct, editProduct, setProducts } = productSlice.actions;

export default productSlice.reducer;
