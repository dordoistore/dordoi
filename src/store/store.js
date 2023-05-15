import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./actions/cart-actions";
import productReducer from "./actions/product-actions";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productReducer
    },
});