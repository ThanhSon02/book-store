import "./Header.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button, Dropdown, Modal, Space } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import Logout from "../Logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { cartCheckout } from "../../redux/Slice/checkoutSlice";
import SearchInput from "../SearchInput/SearchInput";

function Header() {
    const cartList = useSelector((state) => state.cart.cartList);
    const userLogin = useSelector((state) => state.auth.auth);
    const dispatch = useDispatch();

    const items = [
        {
            key: "1",
            label: <Link to={"/user/profile/info"}>Quản lý tài khoản</Link>,
        },
        {
            key: "2",
            label:
                userLogin?.userInfo && userLogin?.userInfo?.isAdmin ? (
                    <Link to={"/admin/dashboard/users"}>Quản lý trang web</Link>
                ) : (
                    <></>
                ),
        },
        {
            key: "3",
            label: userLogin?.userInfo ? <Logout /> : <></>,
        },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        dispatch(cartCheckout());
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <Avatar src={"/owl.png"} size={72} />
                </Link>
                <div className="search">
                    <SearchInput />
                </div>
                <div className="user">
                    {userLogin.userInfo !== null ? (
                        <Dropdown menu={{ items }} placement="bottom" arrow>
                            <Space>
                                <Avatar
                                    style={{ backgroundColor: "#fff" }}
                                    icon={
                                        <UserOutlined
                                            style={{ color: "#777" }}
                                        />
                                    }
                                />
                            </Space>
                        </Dropdown>
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
                {userLogin.userInfo !== null ? (
                    <div className="cart">
                        <Link
                            to={"/checkout/cart"}
                            onClick={() => dispatch(cartCheckout())}>
                            <Badge count={cartList.length}>
                                <AiOutlineShoppingCart fill="#fff" size={32} />
                            </Badge>
                        </Link>
                    </div>
                ) : (
                    <div className="cart">
                        <Link onClick={showModal}>
                            <Badge count={cartList.length}>
                                <AiOutlineShoppingCart fill="#fff" size={32} />
                            </Badge>
                        </Link>
                        <Modal
                            open={isModalOpen}
                            onCancel={handleCancel}
                            footer={[
                                <Button key="back" onClick={handleCancel}>
                                    Trở lại
                                </Button>,
                                <Button
                                    key="login"
                                    type="primary"
                                    onClick={handleOk}>
                                    <Link to={"/login"}>
                                        Tới trang đăng nhập
                                    </Link>
                                </Button>,
                            ]}>
                            <h3>Đăng nhập để truy cập giỏ hàng!</h3>
                        </Modal>
                    </div>
                )}
            </div>
            <Navbar />
        </div>
    );
}

export default Header;
