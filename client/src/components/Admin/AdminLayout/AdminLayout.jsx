import { Menu } from "antd";
import "./AdminLayout.scss";
import {
    UserOutlined,
    ShopOutlined,
    FileTextOutlined,
} from "@ant-design/icons";
import { Link, Outlet, useLocation } from "react-router-dom";
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem(
        <Link to={"/admin/dashboard/users"}>Người dùng</Link>,
        "users",
        <UserOutlined />
    ),
    getItem(
        <Link to={"/admin/dashboard/books"}>Sản phẩn</Link>,
        "books",
        <ShopOutlined />
    ),
    getItem(
        <Link to={"/admin/dashboard/orders"}>Đơn hàng</Link>,
        "orders",
        <FileTextOutlined />
    ),
];

function AdminLayout() {
    const url = useLocation();

    return (
        <div className="admin-layout">
            <Menu
                className="admin-menu"
                selectedKeys={url.pathname.split("/")[3]}
                defaultOpenKeys={["sub1"]}
                items={items}
            />
            <Outlet />
        </div>
    );
}

export default AdminLayout;
