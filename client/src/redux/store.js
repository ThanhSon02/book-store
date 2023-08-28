import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authSlice";
import cartReducer from "./Slice/cartSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartReducer.reducer,
    },
});

export default store;
