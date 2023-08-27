import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios";
import { toast } from "react-toastify";

const initialState = {
    login: {
        user: null,
        status: "idle",
    },
    register: {
        status: "idle",
    },
};

const authSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.login.status = "loading";
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.login.status = "idle";
                state.login.user = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.register.status = "loading";
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.register.status = "idle";
            });
    },
});

export const loginUser = createAsyncThunk(
    "auth/loginFetch",
    async ({ loginInfo, navigate }) => {
        try {
            const res = await axiosInstance.post("/auth/login", loginInfo);
            navigate("/");
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const registerUser = createAsyncThunk(
    "auth/registerFetch",
    async ({ registerInfo, navigate }) => {
        try {
            const res = await axiosInstance.post(
                "/auth/register",
                registerInfo
            );
            navigate("/login");
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export default authSlice.reducer;
