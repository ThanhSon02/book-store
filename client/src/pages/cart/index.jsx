import { Button } from "antd";
import EmptyProfileOrder from "../../components/EmptyProfileOrder/EmptyProfileOrder";
import { useDispatch, useSelector } from "react-redux";
import "./cart_page.scss";
import CartItrem from "../../components/CartItem/CartItem";
import { cartCheckout, paymentCheckout } from "../../redux/Slice/checkoutSlice";
import { useNavigate } from "react-router-dom";
import priceWithCommas from "../../util/priceWithCommas";
import { useEffect } from "react";
import { caculateTotal } from "../../util/caculateTotal";
import { toast } from "react-toastify";

function CartPage() {
    const cartList = useSelector((state) => state.cart.cartList);
    const userInfo = useSelector((state) => state.auth.auth.userInfo);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handlePaymentBtn = () => {
        if (userInfo.address !== "" && userInfo.address) {
            dispatch(paymentCheckout());
            navigate("/checkout/payment");
        } else {
            toast.warn("Vui lòng cập nhật địa chỉ của bạn");
            navigate("/user/profile/info");
        }
    };

    useEffect(() => {
        dispatch(cartCheckout());
    }, []);

    return (
        <div className="cart-page">
            <div className="cart-list">
                <h2 className="cart-title">Giỏ hàng</h2>
                {cartList.length === 0 ? (
                    <EmptyProfileOrder />
                ) : (
                    cartList.map((cartItem) => (
                        <CartItrem key={cartItem.book._id} data={cartItem} />
                    ))
                )}
            </div>
            {cartList.length === 0 ? (
                <></>
            ) : (
                <div className="cart-bottom">
                    <div className="total-box">
                        <h3>Tổng thanh toán: </h3>
                        <span>{priceWithCommas(caculateTotal(cartList))}đ</span>
                    </div>
                    <Button
                        onClick={handlePaymentBtn}
                        className="cart-btn"
                        size="large">
                        Thanh toán
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CartPage;
