import "./Header.scss";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import Search from "antd/es/input/Search";
import { Avatar, Badge, Button, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
const items = [
    {
        key: "1",
        label: <Link to="/login">Login</Link>,
    },
    {
        key: "2",
        label: <Link to="/register">Register</Link>,
    },
];

function Header() {
    const cartList = useSelector((state) => state.cart.cartList);
    const isLogin = useSelector((state) => state.user.isLogin);
    const onSearch = (value) => {
        console.log(value);
    };

    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <Avatar src={"/logo.png"} size={72} />
                </Link>
                <div className="search">
                    <Search onSearch={onSearch} />
                </div>
                <div className="user">
                    {/* <Dropdown
                        className="user-mobile"
                        menu={{ items }}
                        placement="bottom">
                        <Button
                            shape="circle"
                            icon={<AiOutlineUser />}></Button>
                    </Dropdown> */}
                    {isLogin ? (
                        <Space>
                            <Link to={"/user/profile/info"}>
                                <Avatar
                                    style={{ backgroundColor: "#87d068" }}
                                    icon={<UserOutlined />}
                                />
                            </Link>
                        </Space>
                    ) : (
                        <Space className="user-pc">
                            <Button className="btn">
                                <Link to={"/login"}>Login</Link>
                            </Button>
                            <Button className="btn">
                                <Link to={"/register"}>Register</Link>
                            </Button>
                        </Space>
                    )}
                </div>
                <div className="cart">
                    <Link to={"/checkout/cart"}>
                        <Badge count={cartList.length}>
                            <AiOutlineShoppingCart fill="#fff" size={30} />
                        </Badge>
                    </Link>
                </div>
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
