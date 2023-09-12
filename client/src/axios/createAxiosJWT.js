import axios from "axios";
import { updateAccessToken } from "../redux/Slice/authSlice";
import { refreshToken } from "../service/userService";
import jwtDecode from "jwt-decode";

const createAxiosJwt = (accessToken, dispatch) => {
    const axiosInstance = axios.create({
        baseURL: "http://localhost:3001/api/v1",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
        },
    });
    axiosInstance.interceptors.request.use(
        async (config) => {
            let date = new Date();
            const jwtDecodeToken = jwtDecode(accessToken);
            if (jwtDecodeToken.exp < date.getTime() / 1000) {
                const data = await refreshToken();
                const newAccessToken = data.accessToken;
                dispatch(updateAccessToken(newAccessToken));
                config.headers["token"] = "Bearer " + data.accessToken;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    return axiosInstance;
};

export default createAxiosJwt;
