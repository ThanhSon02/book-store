import { PayPalButtons } from "@paypal/react-paypal-js";
import { useDispatch } from "react-redux";
import { createOrder } from "../../service/orderService";
import { convertVndToUsd } from "../../util/convertVndToUsd";
import { toast } from "react-toastify";
import { clearCart } from "../../redux/Slice/cartSlice";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function PaypalPayment({ orderInfo, accessToken }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleApproveOrder = (order) => {
        if (order.status === "COMPLETED") {
            const newOrderInfo = {
                ...orderInfo,
                isPaid: true,
            };
            dispatch(createOrder({ orderInfo: newOrderInfo, accessToken }));
            dispatch(clearCart());
            navigate("/user/profile/order");
        } else {
            toast.error("Purchase Failure!");
        }
    };

    return (
        <PayPalButtons
            style={{
                layout: "horizontal",
                height: 48,
                tagline: false,
                shape: "pill",
            }}
            createOrder={(data, actions) => {
                const orderActions = actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: convertVndToUsd(orderInfo.totalOrder),
                            },
                            reference_id: orderInfo.user._id,
                        },
                    ],
                });
                return orderActions;
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                handleApproveOrder(order);
            }}
        />
    );
}

export default PaypalPayment;
