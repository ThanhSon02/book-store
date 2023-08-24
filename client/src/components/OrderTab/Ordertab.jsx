import "./OrderTab.scss";
function OrderTab() {
    return (
        <div style={{ marginBottom: 30 }}>
            <h2>Cách đặt hàng</h2>
            <p style={{ marginBottom: 20, fontSize: 16 }}>
                Chi tiết về phương thức mua hàng
            </p>
            <div className="step-section">
                <div className="step">
                    <div className="img-box">
                        <img src="/choose_product.png" />
                    </div>
                    <div className="step-text">
                        <h3>1. Chọn sản phẩm</h3>
                        <div>
                            Chọn sản phẩm bạn muốn. Đặt số lượng và bấm Thêm vào
                            giỏ hoặc bấm Mua ngay để đến trang Thanh toán ngay
                            lập tức.
                        </div>
                    </div>
                </div>

                <div className="step">
                    <div className="img-box">
                        <img src="/confirm_order.png" />
                    </div>
                    <div className="step-text">
                        <h3>2. Giỏ hàng</h3>
                        <div>
                            Kiểm tra các mặt hàng trong giỏ. Tại đây bạn có thể
                            lựa chọn các sản phẩm đặt mua và thanh toán. Bấm nút
                            Thanh toán để đến trang thanh toán.
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="img-box">
                        <img src="/folow_process.png" />
                    </div>
                    <div className="step-text">
                        <h3>3. Thanh toán</h3>
                        <div>- Đăng nhập hoặc đăng ký tài khoản.</div>
                        <div>
                            - Hệ thống sẽ tự động tính phí giao hàng. Bạn có thể
                            chọn lại phương thức vận chuyển khác.
                        </div>
                        <div>- Chọn phương thức thanh toán.</div>
                        <div>- Nhấn nút đặt hàng</div>
                    </div>
                </div>
                <div className="step">
                    <div className="img-box">
                        <img src="/folow_process.png" />
                    </div>
                    <div className="step-text">
                        <h3>4. Xác nhận đơn hàng</h3>
                        <div>
                            Hệ thống hiển thị popup xác nhận thông tin đơn hàng.
                            Kiểm tra và nhấn nút xác nhận để giao dịch và thanh
                            toán. Nếu bạn chọn thanh toán trực tuyến, hệ thống
                            sẽ đưa bạn đến trang để thực hiện thanh toán.
                        </div>
                    </div>
                </div>
                <div className="step">
                    <div className="img-box">
                        <img src="/flow_order.png" />
                    </div>
                    <div className="step-text">
                        <h3>5. Theo dõi trạng thái</h3>
                        <div>
                            Sau khi đặt hàng, bạn có thể theo dõi tình trạng đơn
                            hàng của mình trong Tài khoản cá nhân.
                        </div>
                        <div>
                            Sau khi gian hàng đã chuyển hàng cho đơn vị vận
                            chuyển, mã vận đơn sẽ được cập nhật.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderTab;
