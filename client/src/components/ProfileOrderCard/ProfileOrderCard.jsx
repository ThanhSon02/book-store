/* eslint-disable react/prop-types */
// import { Button } from "antd";
import "./ProfileOrderCard.scss";
import priceWithCommas from "../../util/priceWithCommas";
function ProfileOrderCard({ orderData = [] }) {
    const checkOrderStatus = (order) => {
        if (order.isPaid && order.isDelivered) {
            return "Hoàn thành";
        } else if (!order.isDelivered && !order.isPaid) {
            return "Chờ thanh toán + Vận chuyển";
        } else {
            return "Vận chuyển";
        }
    };

    return (
        <>
            {orderData.map((order) => (
                <div key={order._id} className="order-list">
                    <div className="profile-order">
                        <div className="profile-order-header">
                            <h3>{checkOrderStatus(order)}</h3>
                        </div>
                        <div className="product-list">
                            {order.orderItems.map((item) => (
                                <div key={item._id} className="product-item">
                                    <div className="product-item-info">
                                        <img src={item.book.book_img} />
                                        <div>
                                            <h5>{item.book.book_name}</h5>
                                            <p>x{item.quantity}</p>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h5>
                                            {priceWithCommas(item.book.price)} đ
                                        </h5>
                                    </div>
                                </div>
                            ))}
                            <div className="total">
                                <h4>Thành tiền: </h4>
                                <h3>{priceWithCommas(order.totalOrder)} đ</h3>
                            </div>
                        </div>
                        {/* <div className="profile-order-btn">
                            <Button>Xem chi tiết</Button>
                        </div> */}
                    </div>
                </div>
            ))}
        </>
    );
}

export default ProfileOrderCard;
