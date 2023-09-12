import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import createAxiosJwt from "../axios/createAxiosJWT";

export const createOrder = createAsyncThunk(
    "order/create",
    async ({ orderInfo, accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);
            const res = await axiosJwt.post("order/create", orderInfo, {
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

export const getAllOrder = createAsyncThunk(
    "order/getAll",
    async ({ accessToken, dispatch }) => {
        try {
            const axiosJwt = createAxiosJwt(accessToken, dispatch);
            const res = await axiosJwt.get("/order/get-all-order", {
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

// export const updateStatusOrder = createAsyncThunk(
//     "order/updateStatus",
//     async ({ orderID, accessToken }) => {
//         try {
//             console.log(orderID);
//             const res = await axiosInstance.put(
//                 "/order/update-status",
//                 orderID,
//                 {
//                     headers: {
//                         token: `Beare ${accessToken}`,
//                     },
//                 }
//             );
//             console.log(res.data);
//             toast.success(res.data.message);
//             return res.data;
//         } catch (error) {
//             toast.error(error.response.data.message);
//         }
//     }
// );
