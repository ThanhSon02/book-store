import ButtonCustom from "../ButtonCustom/ButtonCustom";
import "./ProfileOrderCard.scss";
function ProfileOrderCard({ orderData }) {
    return (
        <>
            <div
                style={{
                    backgroundColor: "#fff",
                    borderRadius: 4,
                    marginBottom: 14,
                }}>
                <div className="profile-order">
                    <div className="profile-order-header">
                        <h3>Hoàn thành</h3>
                    </div>
                    <div className="product-list">
                        <div className="product-item">
                            <div className="product-item-info">
                                <img src="/order_card.jpg" />
                                <div>
                                    <h5>Nhà giả kim</h5>
                                    <p>x1</p>
                                </div>
                            </div>
                            <div className="product-price">
                                <h5>60000 đ</h5>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-item-info">
                                <img src="/order_card.jpg" />
                                <div>
                                    <h5>Nhà giả kim</h5>
                                    <p>x1</p>
                                </div>
                            </div>
                            <div className="product-price">
                                <h5>60000 đ</h5>
                            </div>
                        </div>

                        <div className="total">
                            <h4>Tổng tiền: </h4>
                            <h3>120000 đ</h3>
                        </div>
                    </div>
                    <div className="profile-order-btn">
                        <ButtonCustom>Xem chi tiết</ButtonCustom>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: "#fff", borderRadius: 4 }}>
                <div className="profile-order">
                    <div className="profile-order-header">
                        <h3>Hoàn thành</h3>
                    </div>
                    <div className="product-list">
                        <div className="product-item">
                            <div className="product-item-info">
                                <img src="/order_card.jpg" />
                                <div>
                                    <h5>Nhà giả kim</h5>
                                    <p>x1</p>
                                </div>
                            </div>
                            <div className="product-price">
                                <h5>60000 đ</h5>
                            </div>
                        </div>
                        <div className="product-item">
                            <div className="product-item-info">
                                <img src="/order_card.jpg" />
                                <div>
                                    <h5>Nhà giả kim</h5>
                                    <p>x1</p>
                                </div>
                            </div>
                            <div className="product-price">
                                <h5>60000 đ</h5>
                            </div>
                        </div>

                        <div className="total">
                            <h4>Tổng tiền: </h4>
                            <h3>120000 đ</h3>
                        </div>
                    </div>
                    <div className="profile-order-btn">
                        <ButtonCustom>Xem chi tiết</ButtonCustom>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProfileOrderCard;
