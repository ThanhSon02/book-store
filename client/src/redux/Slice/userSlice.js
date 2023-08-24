import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: true,
};

const userSLice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(state, action);
        },
    },
});

export const { login } = userSLice.actions;

export default userSLice.reducer;
