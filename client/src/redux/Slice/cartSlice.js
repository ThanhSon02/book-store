import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartList: [],
};

const cartSlice = createSlice({
    name: "cartList",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload;
            const findItem = state.cartList.find(
                (i) => item.book._id === i.book._id
            );
            if (findItem) {
                const newCart = {
                    ...state,
                    cartList: state.cartList.map((i) =>
                        i.book._id === item.book._id ? item : i
                    ),
                };

                return newCart;
            } else {
                const newCart = {
                    ...state,
                    cartList: [...state.cartList, item],
                };
                return newCart;
            }
        },

        removeFromCart: (state, action) => {
            const item = action.payload;
            const findItem = state.cartList.find(
                (i) => i.book._id === item.book._id
            );
            if (findItem) {
                const newList = state.cartList.filter(
                    (i) => i.book._id !== item.book._id
                );
                const newCart = {
                    ...state,
                    cartList: newList,
                };
                return newCart;
            }
        },

        clearCart: (state) => {
            state.cartList = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice;
