import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: JSON.parse(localStorage.getItem("cartList")) || [],
};

const cartSlice = createSlice({
    name: "cartList",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const findItem = state.cartList.find((i) => item.id === i.id);
            if (findItem) {
                const newCart = {
                    ...state,
                    cartList: state.cartList.map((i) =>
                        i.id === item.id ? item : i
                    ),
                };
                console.log(newCart);
                localStorage.setItem(
                    "cartList",
                    JSON.stringify(newCart.cartList)
                );
                return newCart;
            } else {
                const newCart = {
                    ...state,
                    cartList: [...state.cartList, item],
                };
                console.log(newCart);
                localStorage.setItem(
                    "cartList",
                    JSON.stringify(newCart.cartList)
                );
                return newCart;
            }
        },

        removeFromCart: (state, action) => {
            const item = action.payload;
            const findItem = state.cartList.find((i) => i.id === item.id);
            if (findItem) {
                const newList = state.cartList.filter((i) => i.id !== item.id);
                const newCart = {
                    ...state,
                    cartList: newList,
                };
                localStorage.setItem(
                    "cartList",
                    JSON.stringify(newCart.cartList)
                );
                return newCart;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
