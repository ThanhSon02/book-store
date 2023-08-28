import { Steps } from "antd";
import {
    ShoppingCartOutlined,
    SmileOutlined,
    SolutionOutlined,
} from "@ant-design/icons";
import EmptyProfileOrder from "../../components/EmptyProfileOrder/EmptyProfileOrder";
import { useSelector } from "react-redux";
import "./cart_page.scss";
import CartItrem from "../../components/CartItem/CartItem";

function CartPage() {
    const cartList = useSelector((state) => state.cart.cartList);

    return (
        <div className="cart-page">
            <div className="cart-content">
                <Steps
                    className="step"
                    size="small"
                    items={[
                        {
                            title: "Chọn mua",
                            status: "process",
                            icon: <ShoppingCartOutlined />,
                        },
                        {
                            title: "Thanh toán",
                            status: "wait",
                            icon: <SolutionOutlined />,
                        },
                        {
                            title: "Done",
                            status: "wait",
                            icon: <SmileOutlined />,
                        },
                    ]}
                />
                <h2 className="cart-title">Giỏ hàng</h2>
                {cartList.length === 0 ? (
                    <EmptyProfileOrder />
                ) : (
                    cartList.map((cartItem) => (
                        <CartItrem key={cartItem.id} data={cartItem} />
                    ))
                )}
            </div>
        </div>
    );
}

export default CartPage;
