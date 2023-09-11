import { Steps } from "antd";
import { useSelector } from "react-redux";
import {
    ShoppingCartOutlined,
    SmileOutlined,
    SolutionOutlined,
} from "@ant-design/icons";
import { Outlet } from "react-router-dom";
import "./CartPayment_Layout.scss";

function CartPayment_Layout() {
    const checkout = useSelector((state) => state.checkout);
    return (
        <>
            <Steps
                className="step"
                current={checkout.currentCheckout}
                size="small"
                items={[
                    {
                        title: "Chọn mua",
                        icon: <ShoppingCartOutlined />,
                    },
                    {
                        title: "Thanh toán",
                        icon: <SolutionOutlined />,
                    },
                    {
                        title: "Done",
                        icon: <SmileOutlined />,
                    },
                ]}
            />
            <Outlet />
        </>
    );
}

export default CartPayment_Layout;
