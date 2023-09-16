import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: "http://localhost:3001/api/v1",
    // baseURL: "https://ts-book-store-server.onrender.com/api/v1",
    baseURL: "https://book-store-server-ten.vercel.app/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
    },
});

export default axiosInstance;
