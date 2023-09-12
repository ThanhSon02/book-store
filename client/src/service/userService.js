import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";
import { toast } from "react-toastify";
import createAxiosJwt from "../axios/createAxiosJWT";

export const loginUser = createAsyncThunk(
    "auth/loginFetch",
    async ({ loginInfo, navigate }) => {
        try {
            const res = await axiosInstance.post("/auth/login", loginInfo);
            navigate("/");
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
            return error.response.data;
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

export const logoutUser = createAsyncThunk(
    "auth/logoutFetch",
    async ({ accessToken, navigate, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);

            const res = await axiosJwt.post(
                "/auth/logout",
                {},
                {
                    headers: {
                        token: `Bearer ${accessToken}`,
                    },
                }
            );
            toast.success(res.data.message);
            navigate("/");
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const getAllUser = createAsyncThunk(
    "user/getAllUser",
    async ({ accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);

            const res = await axiosJwt.get("/user/get_all_user", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            });
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const deleteUser = createAsyncThunk(
    "user/deleteUser",
    async ({ userID, accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);

            const res = await axiosJwt.delete("/user/delete_user", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
                data: {
                    userID,
                },
            });
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const updateUser = createAsyncThunk(
    "user/updateUser",
    async ({ userInfo, accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);
            const res = await axiosJwt.put("/user/update_info/", userInfo, {
                headers: {
                    token: `Bearer ${accessToken}`,
                },
            });
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const refreshToken = async () => {
    try {
        const res = await axiosInstance.post("/auth/refresh_token", {});
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
};
