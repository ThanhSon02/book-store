import { Button, Modal, Rate } from "antd";
import "./BookDetail.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Slice/cartSlice";

/* eslint-disable react/prop-types */
function BookDetail({ data }) {
    const user = useSelector((state) => state.auth.login.user);
    const dispatch = useDispatch();

    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onIncrease = () => {
        setQuantity(quantity + 1);
    };
    const onDecrease = () => {
        setQuantity(quantity - 1);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleAddToCart = () => {
        if (user) {
            const { id, bookImg, bookTitle, price, discount, stock } = data;
            dispatch(
                addToCart({
                    id,
                    bookImg,
                    bookTitle,
                    price,
                    discount,
                    stock,
                    quantity,
                })
            );
        } else {
            showModal();
        }
    };

    return (
        <div className="book-detai-container">
            <div className="img-section">
                <div
                    className="img"
                    style={{
                        backgroundImage: `url(${data.bookImg})`,
                    }}></div>
            </div>
            <div className="detail-section">
                <h2 className="title">{data.bookTitle}</h2>
                <div className="author-section">
                    <h3>Tác giả: </h3>
                    <Link>{data.author}</Link>
                </div>
                <div className="catagory-section">
                    <div>
                        <p>Lĩnh vực:</p>
                        <Link>{data.catagory}</Link>
                    </div>
                    <div>
                        <p>Loại sách:</p>
                        <Link>{data.bookType}</Link>
                    </div>
                </div>
                <Rate value={3} className="rate-section" />
                <div className="price-section">
                    <h2>{data.price * (1 - data.discount / 100)} đ</h2>
                    <div>
                        <span>{data.price} đ</span>
                        <p>-{data.discount}%</p>
                    </div>
                </div>
                <div className="staus-section">
                    <h3>Tình trạng:</h3>
                    <p>{data.stock}</p>
                </div>
                <div className="quantity-section">
                    <h3>Số lượng</h3>
                    <div>
                        <Button onClick={onDecrease} disabled={quantity === 1}>
                            -
                        </Button>
                        <span>{quantity}</span>
                        <Button onClick={onIncrease}>+</Button>
                    </div>
                </div>
                <div className="btn-action-section">
                    <Button className="btn-buy">Mua ngay</Button>
                    <Button onClick={handleAddToCart} className="btn-add-cart">
                        Thêm vào giỏ hàng
                    </Button>
                    <Modal
                        title="Bạn chưa đăng nhập!"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        footer={[
                            <Button key="back" onClick={handleCancel}>
                                Trở lại
                            </Button>,
                            <Button
                                key="link"
                                href="/login"
                                type="primary"
                                onClick={handleOk}>
                                Tới trang đăng nhập
                            </Button>,
                        ]}>
                        <h4>Vui lòng đăng nhập để thêm sản phẩm</h4>
                    </Modal>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
