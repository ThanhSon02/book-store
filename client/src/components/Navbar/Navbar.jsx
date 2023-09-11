import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import DropdownCategory from "../DropdownCategory/DropdownCategory";
const links = [
    {
        id: 1,
        title: "Sách hot",
        image: "/hot.png",
        url: "/hot_book",
    },
    {
        id: 2,
        title: "Sách bán chạy",
        image: "/best-seller.png",
        url: "/best_seller",
    },
    {
        id: 3,
        title: "Sách mới",
        image: "/new.png",
        url: "/new",
    },
    {
        id: 4,
        title: "Tất cả sản phẩm",
        image: "/all.png",
        url: "/all",
    },
];

function Navbar() {
    return (
        <nav className="nav-container">
            <DropdownCategory>
                <div className="nav-item">
                    <a className="nav-link">
                        <img className="nav-link-icon" src="/menu.png" />
                        <span>Danh mục</span>
                    </a>
                </div>
            </DropdownCategory>
            {links.map((link) => (
                <div key={link.id} className="nav-item">
                    <NavLink
                        to={link.url}
                        className={({ isActive }) =>
                            isActive ? "active nav-link" : "nav-link"
                        }>
                        <img src={link.image} className="nav-link-icon" />
                        <span>{link.title}</span>
                    </NavLink>
                </div>
            ))}
        </nav>
    );
}

export default Navbar;
