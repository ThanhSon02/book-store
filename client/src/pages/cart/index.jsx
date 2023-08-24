import { Steps } from "antd";
import {
    ShoppingCartOutlined,
    SmileOutlined,
    SolutionOutlined,
} from "@ant-design/icons";
import "./cart_page.scss";
import ButtonCustom from "../../components/ButtonCustom/ButtonCustom";
import EmptyProfileOrder from "../../components/EmptyProfileOrder/EmptyProfileOrder";

function CartPage() {
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
                {(
                    <div className="cart-list">
                        <h2 className="cart-title">Giỏ hàng</h2>
                        <div className="cart-item">
                            <div className="cart-item-product">
                                <img
                                    className="cart-item-img"
                                    src="/order_card.jpg"
                                    width={80}
                                    height={80}
                                />
                                <div className="cart-item-title">
                                    <h4>Nhà giả kim</h4>
                                </div>
                            </div>
                            <div className="cart-item-unit">
                                <span>80000đ</span>
                                <span>60000đ</span>
                            </div>
                            <div className="cart-item-quantity">
                                <button>-</button>
                                <input value={1} />
                                <button>+</button>
                            </div>
                            <div className="cart-item-price">
                                <span>60000đ</span>
                            </div>
                            <div className="cart-item-delete-btn">
                                <ButtonCustom>Xoá</ButtonCustom>
                            </div>
                        </div>
                    </div>
                ) || <EmptyProfileOrder />}
            </div>
        </div>
    );
}

export default CartPage;
