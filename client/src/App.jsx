import { Route, Routes } from "react-router-dom";
import DigitalBook from "./pages/digital_book";
import Publisher from "./pages/publisher";
import Order from "./pages/order";
import PrintBook from "./pages/print_book";
import Layout from "./components/Layout/Layout";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import BookCategory from "./pages/book-catagogy";
import Detail from "./pages/detail";
import ProtectedLayout from "./components/ProtectedLayout/ProtectedLayout";
import Profile from "./pages/profile";
import ProfileDetail from "./components/ProfileDetail/ProfileDetail";
import ProfileOrder from "./components/ProfileOrder/ProfileOrder";
import CartPage from "./pages/cart";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<PrintBook />} />
                <Route path="/digital_book" element={<DigitalBook />} />
                <Route path="/publisher" element={<Publisher />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/book" element={<BookCategory />} />
                <Route path="/book/sach-hay" element={<BookCategory />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route element={<ProtectedLayout />}>
                    <Route element={<Profile />}>
                        <Route
                            index={true}
                            path="/user/profile/info"
                            element={<ProfileDetail />}
                        />
                        <Route
                            index={true}
                            path="/user/profile/order"
                            element={<ProfileOrder />}
                        />
                    </Route>
                    <Route path="/checkout/cart" element={<CartPage />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
