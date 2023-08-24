import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    isSucces: false,
    isFailure: false,
};

const appSlice = createSlice({
    name: "appStatus",
    initialState,
    reducers: {},
});

export default appSlice.reducer;
