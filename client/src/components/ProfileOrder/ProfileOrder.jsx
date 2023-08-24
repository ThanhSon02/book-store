import EmptyProfileOrder from "../EmptyProfileOrder/EmptyProfileOrder";
import ProfileOrderCard from "../ProfileOrderCard/ProfileOrderCard";
import TabLayout from "../TabLayout/TabLayout";

function ProfileOrder() {
    return (
        <div
            style={{
                width: "100%",
                padding: 10,
                backgroundColor: "#f5f5fa",
                borderRadius: 4,
            }}>
            <TabLayout
                tabItems={[
                    {
                        key: "1",
                        label: "Tất cả",
                        children: <ProfileOrderCard />,
                    },
                    {
                        key: "2",
                        label: "Chờ thanh toán",
                        children: <EmptyProfileOrder />,
                    },
                    {
                        key: "3",
                        label: "Vận chuyển",
                        children: <EmptyProfileOrder />,
                    },
                    {
                        key: "4",
                        label: "Đang giao",
                        children: <EmptyProfileOrder />,
                    },
                    {
                        key: "5",
                        label: "Hoàn thành",
                        children: <EmptyProfileOrder />,
                    },
                    {
                        key: "6",
                        label: "Đã huỷ",
                        children: <EmptyProfileOrder />,
                    },
                ]}
            />
        </div>
    );
}

export default ProfileOrder;
