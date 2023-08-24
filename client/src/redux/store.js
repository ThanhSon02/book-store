import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import cartReducer from "./Slice/cartSlice";
import appReducer from "./Slice/appSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        app: appReducer,
    },
});

export default store;
