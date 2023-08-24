import Register from "../pages/auth/Register/Register";
import Login from "../pages/auth/Login/Login";
import BookCategory from "../pages/book-catagogy";
import DigitalBook from "../pages/digital_book";
import Order from "../pages/order";
import PrintBook from "../pages/print_book";
import Publisher from "../pages/publisher";

export const routes = [
    {
        path: "/",
        element: <PrintBook />,
    },
    {
        path: "/digital_book",
        element: <DigitalBook />,
    },
    {
        path: "/publisher",
        element: <Publisher />,
    },
    {
        path: "/order",
        element: <Order />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/book",
        element: <BookCategory />,
    },
];
