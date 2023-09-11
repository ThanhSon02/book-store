import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCheckout: null,
};

const checkoutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        cartCheckout: (state) => {
            state.currentCheckout = 0;
        },
        paymentCheckout: (state) => {
            state.currentCheckout = 1;
        },
        successCheckout: (state) => {
            state.currentCheckout = 2;
        },
        resetCheckout: (state) => {
            state.currentCheckout = null;
        },
    },
});

export const { cartCheckout, paymentCheckout, successCheckout, resetCheckout } =
    checkoutSlice.actions;

export default checkoutSlice;
