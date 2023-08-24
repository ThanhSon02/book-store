import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const links = [
    {
        id: 1,
        title: "Sách in",
        url: "/",
    },
    {
        id: 2,
        title: "Sách điện tử",
        url: "/digital_book",
    },
    {
        id: 3,
        title: "Nhà xuất bản",
        url: "/publisher",
    },
    {
        id: 4,
        title: "Tra cứu đơn hàng",
        url: "/order",
    },
];
function Navbar() {
    return (
        <div className="nav-container">
            {links.map((link) => (
                <div key={link.id} className="nav-item">
                    <NavLink
                        to={link.url}
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "nav-link"
                        }>
                        {link.title}
                    </NavLink>
                </div>
            ))}
        </div>
    );
}

export default Navbar;
