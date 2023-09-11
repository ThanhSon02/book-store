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
                autoClose={1000}
                hideProgressBar={true}
                newestOnTop={false}
                rtl={false}
                pauseOnHover={false}
                draggable
                theme="colored"
            />
        </div>
    );
}

export default Layout;
