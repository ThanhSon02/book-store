import { Route, Routes } from "react-router-dom";
import Order from "./pages/order";
import Layout from "./components/Layout/Layout";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Detail from "./pages/detail";
import ProtectedLayout from "./components/ProtectedLayout/ProtectedLayout";
import Profile from "./pages/profile";
import ProfileDetail from "./components/ProfileDetail/ProfileDetail";
import ProfileOrder from "./components/ProfileOrder/ProfileOrder";
import CartPage from "./pages/cart";
import ProtectedAdminLayout from "./components/ProtectedAdminLayout/ProtectedAdminLayout";
import AdminPage from "./pages/admin";
import AdminUser from "./components/Admin/AdminUser/AdminUser";
import AdminProduct from "./components/Admin/AdminProduct/AdminProduct";
import AdminOrder from "./components/Admin/AdminOrder/AdminOrder";
import HomePage from "./pages/home";
import BestSeller from "./pages/best_seller";
import Hot from "./pages/hot_book";
import New from "./pages/new_book";
import All from "./pages/all_product";
import CartPayment_Layout from "./components/CartPayment_Layout/CartPayment_Layout";
import PaymentPage from "./pages/payment";
import CategoryPage from "./pages/category";
import AccountPage from "./pages/account";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="/best_seller" element={<BestSeller />} />
                <Route path="/hot_book" element={<Hot />} />
                <Route path="/new" element={<New />} />
                <Route path="/all" element={<All />} />
                <Route path="/category/:type" element={<CategoryPage />} />
                <Route path="/account" element={<AccountPage />} />
                <Route element={<ProtectedLayout />}>
                    <Route element={<Profile />}>
                        <Route
                            path="/user/profile/info"
                            element={<ProfileDetail />}
                        />
                        <Route
                            path="/user/profile/order"
                            element={<ProfileOrder />}
                        />
                    </Route>
                    <Route element={<CartPayment_Layout />}>
                        <Route path="/checkout/cart" element={<CartPage />} />
                        <Route
                            path="/checkout/payment"
                            element={<PaymentPage />}
                        />
                    </Route>
                </Route>
                <Route element={<ProtectedAdminLayout />}>
                    <Route element={<AdminPage />}>
                        <Route
                            index
                            path="/admin/dashboard/users"
                            element={<AdminUser />}
                        />
                        <Route
                            path="/admin/dashboard/books"
                            element={<AdminProduct />}
                        />
                        <Route
                            path="/admin/dashboard/orders"
                            element={<AdminOrder />}
                        />
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
