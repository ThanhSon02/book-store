import "./payment_page.scss";
import { Button, Radio, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { paymentCheckout } from "../../redux/Slice/checkoutSlice";
import { useEffect, useState } from "react";
import priceWithCommas from "../../util/priceWithCommas";
import { caculateTotal } from "../../util/caculateTotal";
import { createOrder } from "../../service/orderService";

import PaypalPayment from "../../components/PaypalPayment/PaypalPayment";
import { clearCart } from "../../redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartList = useSelector((state) => state.cart.cartList);
    const user = useSelector((state) => state.auth.auth);
    const { _id, name, email, phone, address } = user.userInfo;
    const accessToken = user.accessToken;
    const [shipping, setShipping] = useState(0);
    const [payment, setPayment] = useState();

    useEffect(() => {
        dispatch(paymentCheckout());
    }, []);

    const handleConfirmOrder = () => {
        dispatch(
            createOrder({
                orderInfo: {
                    orderItems: cartList,
                    paymentMethod: payment,
                    shippingPrice: shipping,
                    user: { _id, name, email, phone, address },
                    totalOrder: caculateTotal(cartList) + shipping,
                    totalPrice: caculateTotal(cartList),
                    isPaid: false,
                    isDelivered: false,
                },
                accessToken,
            })
        );
        dispatch(clearCart());
        navigate("/user/profile/order");
    };

    return (
        <div className="payment-page">
            <div className="address-box">
                <h2 className="address-title">Địa chỉ nhận hàng</h2>
                <div className="user-info">
                    <span className="user-name">{user.userInfo.name}</span>
                    <span className="user-phone">{user.userInfo.phone}</span>
                    <span className="user-address">
                        {user.userInfo.address}
                    </span>
                </div>
            </div>
            <div className="product-box">
                <h2 className="product-title">Sản phẩm</h2>
                <div className="product-list">
                    {cartList.map((item) => (
                        <div key={item.book._id} className="product-item">
                            <div className="product-item-order">
                                <div className="product-item-img">
                                    <img src={item.book.book_img} alt="book" />
                                </div>
                                <div className="product-item-info">
                                    <span className="book-name">
                                        {item.book.book_name}
                                    </span>
                                    <span className="book-quantity">
                                        x{item.quantity}
                                    </span>
                                </div>
                            </div>
                            <div className="product-price">
                                <h5>
                                    {priceWithCommas(
                                        item.book.price *
                                            (1 - item.book.discount / 100) *
                                            item.quantity
                                    )}
                                    đ
                                </h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="shipping-box">
                <h2 className="shipping-title">Hình thức giao hàng</h2>
                <Radio.Group
                    onChange={(e) => setShipping(e.target.value)}
                    value={shipping}>
                    <Space direction="vertical">
                        <Radio value={23000}>
                            <div className="shipping-option">
                                <img
                                    src="/piggy-bank.png"
                                    className="shipping-img"
                                />
                                <span className="shipping-name">
                                    Giao hàng tiết kiệm
                                </span>
                            </div>
                        </Radio>
                        <Radio value={25000}>
                            <div className="shipping-option">
                                <img
                                    src="/express-delivery.png"
                                    className="shipping-img"
                                />
                                <span className="shipping-name">
                                    Giao hàng nhanh
                                </span>
                            </div>
                        </Radio>
                        <Radio value={30000}>
                            <div className="shipping-option">
                                <img
                                    src="/express-box.png"
                                    className="shipping-img"
                                />
                                <span className="shipping-name">
                                    Giao hàng hoả tốc
                                </span>
                            </div>
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div className="payment-box">
                <h2 className="payment-title">Phương thức thanh toán</h2>
                <Radio.Group
                    onChange={(e) => setPayment(e.target.value)}
                    value={payment}>
                    <Space direction="vertical">
                        <Radio value={"cash"}>
                            <div className="payment-option">
                                <img
                                    src="/give-money.png"
                                    className="payment-img"
                                />
                                <span className="payment-name">
                                    Thanh toán tiền mặt khi nhận hàng
                                </span>
                            </div>
                        </Radio>
                        <Radio value={"card"}>
                            <div className="payment-option">
                                <img
                                    src="/paypal.jpg"
                                    className="payment-img"
                                />
                                <span className="payment-name">
                                    Thanh toán bằng PayPal
                                </span>
                            </div>
                        </Radio>
                    </Space>
                </Radio.Group>
            </div>
            <div className="confirm-box">
                <div className="product-total">
                    <span>Tổng tiền hàng: </span>
                    <span>{priceWithCommas(caculateTotal(cartList))}đ</span>
                </div>
                <div className="shipping-fee">
                    <span>Phí vận chuyển: </span>
                    <span>{shipping}đ</span>
                </div>
                <div className="payment-total">
                    <span>Tổng thanh toán: </span>
                    <span>
                        {priceWithCommas(caculateTotal(cartList) + shipping)}đ
                    </span>
                </div>
                {payment === "card" ? (
                    <PaypalPayment
                        orderInfo={{
                            orderItems: cartList,
                            paymentMethod: payment,
                            shippingPrice: shipping,
                            user: user.userInfo,
                            totalOrder: caculateTotal(cartList) + shipping,
                            totalPrice: caculateTotal(cartList),
                            isPaid: false,
                            isDelivered: false,
                        }}
                        accessToken={accessToken}
                    />
                ) : (
                    <Button
                        onClick={handleConfirmOrder}
                        className="confirm-order-btn"
                        size="large">
                        Đặt hàng
                    </Button>
                )}
            </div>
        </div>
    );
}

export default PaymentPage;
