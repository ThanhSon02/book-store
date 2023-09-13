import { Table, Tag } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrder } from "../../../service/orderService";

function AdminOrder() {
    const dispatch = useDispatch();
    const orderList = useSelector((state) => state.orders.orderList);
    const currentUser = useSelector((state) => state.auth.auth);
    const accessToken = currentUser.accessToken;

    useEffect(() => {
        dispatch(getAllOrder({ accessToken }));
    }, []);

    const columns = [
        {
            title: "Mã đơn hàng",
            dataIndex: "_id",
            key: "_id",
            render: (text) => <div style={{ color: "blue" }}>{text}</div>,
        },
        {
            title: "Người mua",
            dataIndex: "user",
            key: "user",
            render: (user) => <span>{user.name}</span>,
        },
        Table.EXPAND_COLUMN,
        {
            title: "Đơn mua",
            dataIndex: "orderItems",
            key: "orderItems",
            render: (record) => {
                return <span>{record.length} sản phẩm</span>;
            },
        },
        {
            title: "Tổng đơn hàng",
            dataIndex: "totalOrder",
            key: "totalOrder",
            render: (price) => (
                <span style={{ color: "red", fontWeight: "bold" }}>
                    {price}
                </span>
            ),
        },
        {
            title: "Trạng thái thanh toán",
            key: "isPaid",
            dataIndex: "isPaid",
            render: (isPaid) => (
                <Tag>{isPaid ? "Đã thanh toán" : "Chưa thanh toán"}</Tag>
            ),
        },
        {
            title: "Trạng thái",
            key: "isDelivered",
            dataIndex: "isDelivered",
            render: (isDelivered) => {
                if (isDelivered) {
                    return (
                        <Tag style={{ cursor: "default" }} color="green">
                            Hoàn thành
                        </Tag>
                    );
                } else {
                    return (
                        <Tag style={{ cursor: "default" }} color="blue">
                            Vận chuyển
                        </Tag>
                    );
                }
            },
        },
    ];

    return (
        <Table
            style={{ width: "100%" }}
            columns={columns}
            expandable={{
                expandedRowRender: (record) =>
                    record.orderItems.map((item) => (
                        <div
                            style={{
                                display: "flex",
                                gap: 14,
                                alignItems: "center",
                            }}
                            key={item._id}>
                            <img
                                style={{ width: 30, aspectRatio: "2/3" }}
                                src={item.book.book_img}
                            />
                            <h5>{item.book.book_name}</h5>
                            <span>x{item.quantity}</span>
                        </div>
                    )),
            }}
            dataSource={orderList}
        />
    );
}

export default AdminOrder;
