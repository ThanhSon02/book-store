import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./Slice/authSlice";
import cartReducer from "./Slice/cartSlice";
import userSlice from "./Slice/userSlice";
import bookSlice from "./Slice/bookSlice";
import checkoutSlice from "./Slice/checkoutSlice";
import orderSlice from "./Slice/orderSlice";
import filterSlice from "./Slice/filterSlice";

const persistConfig = {
    key: "root",
    storage,
    version: 1,
};
const rootReducer = combineReducers({
    auth: authSlice.reducer,
    cart: cartReducer.reducer,
    users: userSlice.reducer,
    books: bookSlice.reducer,
    checkout: checkoutSlice.reducer,
    orders: orderSlice.reducer,
    filter: filterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});
export let persistor = persistStore(store);
