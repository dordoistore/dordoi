import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./actions";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});