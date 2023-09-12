import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://ts-book-store-server.onrender.com/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
    },
});

export default axiosInstance;
