import { useEffect, useState } from "react";
import EmptyProfileOrder from "../EmptyProfileOrder/EmptyProfileOrder";
import ProfileOrderCard from "../ProfileOrderCard/ProfileOrderCard";
import TabLayout from "../TabLayout/TabLayout";
import { useSelector } from "react-redux";
import axiosInstance from "../../axios/axios";

function ProfileOrder() {
    const user = useSelector((state) => state.auth.auth);
    const accessToken = user.accessToken;

    const [userOrder, setUserOrder] = useState([]);

    useEffect(() => {
        axiosInstance
            .get("/order/get-my-order", {
                headers: {
                    token: `Beare ${accessToken}`,
                },
            })
            .then((result) => {
                setUserOrder(result.data.userOrder);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const tabItems = [
        {
            key: "1",
            label: "Tất cả",
            children:
                userOrder.length !== 0 ? (
                    <ProfileOrderCard orderData={userOrder} />
                ) : (
                    <EmptyProfileOrder />
                ),
        },
        {
            key: "2",
            label: "Chờ thanh toán",
            children:
                userOrder.length !== 0 &&
                userOrder.some((order) => order.isPaid === false) ? (
                    <ProfileOrderCard
                        orderData={userOrder.filter(
                            (order) => order.isPaid === false
                        )}
                    />
                ) : (
                    <EmptyProfileOrder />
                ),
        },
        {
            key: "3",
            label: "Vận chuyển",
            children:
                userOrder.length !== 0 &&
                userOrder.some((order) => order.isDelivered === false) ? (
                    <ProfileOrderCard
                        orderData={userOrder.filter(
                            (order) => order.isDelivered === false
                        )}
                    />
                ) : (
                    <EmptyProfileOrder />
                ),
        },
        {
            key: "4",
            label: "Hoàn thành",
            children:
                userOrder.length !== 0 &&
                userOrder.some(
                    (order) =>
                        order.isDelivered === true && order.isPaid === true
                ) ? (
                    <ProfileOrderCard
                        orderData={userOrder.filter(
                            (order) =>
                                order.isDelivered === true &&
                                order.isPaid === true
                        )}
                    />
                ) : (
                    <EmptyProfileOrder />
                ),
        },
    ];
    return (
        <div
            style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#f5f5fa",
                borderRadius: 4,
            }}>
            <TabLayout tabItems={tabItems} />
        </div>
    );
}

export default ProfileOrder;
