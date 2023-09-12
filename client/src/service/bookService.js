import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../axios/axios";
import { toast } from "react-toastify";
import createAxiosJwt from "../axios/createAxiosJWT";

export const getAllBook = createAsyncThunk("books/getAll", async () => {
    try {
        const res = await axiosInstance.get("/book/get_all_book");
        return res.data;
    } catch (error) {
        toast.error(error.response.data.message);
    }
});

export const createBook = createAsyncThunk(
    "books/create",
    async ({ bookInfo, accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);
            const res = await axiosJwt.post("/book/create", bookInfo, {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            });
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const deleteBook = createAsyncThunk(
    "books/delete",
    async ({ bookID, accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);

            const res = await axiosJwt.delete("/book/delete_book", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
                data: {
                    bookID,
                },
            });
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);

export const updateBook = createAsyncThunk(
    "books/update",
    async ({ bookUpdate, accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);

            const res = await axiosJwt.put("book/update_book", bookUpdate, {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            });
            toast.success(res.data.message);
            return res.data;
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
);
