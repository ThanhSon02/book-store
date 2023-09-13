import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    rating: 0,
    price: {
        min: 0,
        max: 10000000,
    },
    isActive: false,
};
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        filterRating: (state, action) => {
            state.isActive = true;
            state.rating = action.payload;
        },
        filterPrice: (state, action) => {
            state.isActive = true;
            state.price = action.payload;
        },
        resetFilter: (state) => {
            state.price = {
                min: 0,
                max: 10000000,
            };
            state.rating = 0;
            state.isActive = false;
        },
    },
});

export const { filterPrice, filterRating, resetFilter } = filterSlice.actions;

export default filterSlice;
