import { NavLink, Outlet } from "react-router-dom";
import "./profile_page.scss";
import { BiSolidUserDetail, BiSolidDetail } from "react-icons/bi";

function Profile() {
    return (
        <div className="page-container">
            <nav className="side-bar">
                <div className="nav-link">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to={"/user/profile/info"}>
                        <BiSolidUserDetail size={25} color="#7477af" />
                        <span>Tài khoản của tôi</span>
                    </NavLink>
                </div>

                <div className="nav-link">
                    <NavLink
                        className={({ isActive }) => (isActive ? "active" : "")}
                        to={"/user/profile/order"}>
                        <BiSolidDetail size={25} color="#7477af" />
                        <span>Đơn mua</span>
                    </NavLink>
                </div>
            </nav>
            <div className="content">
                <Outlet />
            </div>
        </div>
    );
}

export default Profile;
