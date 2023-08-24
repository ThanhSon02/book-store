import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.scss";
import { ToastContainer } from "react-toastify";
function Layout() {
    return (
        <div className="app-container">
            <Header className="header" />
            <div className="layout">
                <Outlet />
            </div>
            <Footer className="footer" />
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                rtl={false}
                draggable
                theme="colored"
            />
        </div>
    );
}

export default Layout;
