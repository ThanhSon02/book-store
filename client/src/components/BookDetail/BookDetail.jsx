import { Button, Modal } from "antd";
import { Rating } from "@mui/material";
import "./BookDetail.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/Slice/cartSlice";
import {
    PlusOutlined,
    MinusOutlined,
    ShoppingCartOutlined,
} from "@ant-design/icons";
import priceWithCommas from "../../util/priceWithCommas";
import { cartCheckout, paymentCheckout } from "../../redux/Slice/checkoutSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

/* eslint-disable react/prop-types */
function BookDetail({ data }) {
    const user = useSelector((state) => state.auth.auth.userInfo);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        if (user && data.in_stock >= quantity) {
            const { _id, book_img, book_name, price, discount, in_stock } =
                data;
            dispatch(
                addToCart({
                    book: {
                        _id,
                        book_img,
                        book_name,
                        price,
                        discount,
                        in_stock,
                    },
                    quantity,
                })
            );
            toast.success("Sản phẩm đã được thêm vào giỏ hàng");
            dispatch(cartCheckout());
        } else if (!user) {
            showModal();
        } else if (data.in_stock < quantity) {
            toast.warn("Số lượng sản phẩm có sẵn không đủ!");
        }
    };

    const handleBuyNow = () => {
        if (user && user.address && data.in_stock >= quantity) {
            const { _id, book_img, book_name, price, discount, in_stock } =
                data;
            dispatch(
                addToCart({
                    book: {
                        _id,
                        book_img,
                        book_name,
                        price,
                        discount,
                        in_stock,
                    },
                    quantity,
                })
            );
            dispatch(paymentCheckout());
            navigate("/checkout/payment");
        } else if (!user.address || user.address === "") {
            const { _id, book_img, book_name, price, discount, in_stock } =
                data;
            dispatch(
                addToCart({
                    book: {
                        _id,
                        book_img,
                        book_name,
                        price,
                        discount,
                        in_stock,
                    },
                    quantity,
                })
            );
            toast.warn("Vui lòng cập nhật địa chỉ của bạn");
            navigate("/user/profile/info");
        } else if (!user) {
            showModal();
        } else if (data.in_stock < quantity) {
            toast.warn("Số lượng sản phẩm có sẵn không đủ!");
        }
    };

    return (
        <div className="book-detail-container">
            <div className="buy-section">
                <div className="buy-left-section">
                    <img src={data.book_img} alt="book image" />
                </div>
                <div className="buy-right-section">
                    <h1 className="name-box">{data.book_name}</h1>
                    <div className="author-box">
                        <span>Tác giả: </span>
                        <span>{data.author}</span>
                    </div>
                    <div className="rating-box">
                        <Rating value={data.rating} size="small" readOnly />
                    </div>
                    <div className="price-box">
                        <p className="special-price">
                            {priceWithCommas(
                                data.price * (1 - data.discount / 100)
                            )}
                            đ
                        </p>
                        {data.discount !== 0 ? (
                            <p>
                                <span className="old-price">
                                    {priceWithCommas(data.price)}đ
                                </span>
                                <span className="discount">
                                    -{data.discount}%
                                </span>
                            </p>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="in-stock-box">
                        <span>Có sẵn: </span>
                        <span>{data.in_stock}</span>
                    </div>
                    <div className="quantity-box">
                        <label className="quantity-box-label" htmlFor="qty">
                            Số lượng:
                        </label>
                        <div className="quantity-box-block">
                            <button
                                onClick={onDecrease}
                                disabled={quantity === 1}
                                className="btn-subtract">
                                <MinusOutlined />
                            </button>
                            <input
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                type="text"
                                min={1}
                                max={999}
                                name="qty"
                            />
                            <button
                                onClick={onIncrease}
                                disabled={quantity === data.in_stock}
                                className="btn-add">
                                <PlusOutlined />
                            </button>
                        </div>
                    </div>
                    <div className="buy-cart-box">
                        <Button
                            onClick={handleAddToCart}
                            className="btn-add-to-cart">
                            <ShoppingCartOutlined />
                            <span>Thêm vào giỏ hàng</span>
                        </Button>
                        <Button onClick={handleBuyNow} className="buy-btn">
                            Mua ngay
                        </Button>
                        <Modal
                            title="Bạn chưa đăng nhập!"
                            open={isModalOpen}
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
            <div className="info-book-section"></div>
            <div className="introduce-section">
                <h2>Mô tả sản phẩm</h2>
                <div
                    className="desc"
                    dangerouslySetInnerHTML={{
                        __html: data.description,
                    }}></div>
            </div>
            <div className="relate-book-section">COMMING SOON</div>
        </div>
    );
}

export default BookDetail;
