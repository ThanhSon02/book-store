import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, updateUser } from "../../service/userService";

const initialState = {
    auth: { userInfo: null, accessToken: null },
    isLoading: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateAccessToken: (state, action) => {
            state.auth.accessToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auth = action.payload;
            })
            .addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
            })
            .addCase(logoutUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.isLoading = false;
                state.auth.userInfo = null;
                state.auth.accessToken = null;
            })
            .addCase(updateUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.auth = action.payload;
            });
    },
});

export const { updateAccessToken } = authSlice.actions;
export default authSlice;
