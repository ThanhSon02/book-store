import { Button } from "antd";

import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, removeFromCart } from "../../redux/Slice/cartSlice";
import priceWithCommas from "../../util/priceWithCommas";

/* eslint-disable react/prop-types */
function CartItrem({ data }) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(data.quantity);

    const handleIncrease = (cartItem) => {
        setQuantity(quantity + 1);
        const cartUpdate = { ...cartItem, quantity: quantity + 1 };
        dispatch(addToCart(cartUpdate));
    };

    const handleDecrease = (cartItem) => {
        setQuantity(quantity - 1);
        const cartUpdate = { ...cartItem, quantity: quantity - 1 };
        dispatch(addToCart(cartUpdate));
    };

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };
    return (
        <div className="cart-item">
            <div className="cart-item-product">
                <img className="cart-item-img" src={data.book.book_img} />
                <div className="cart-item-title">
                    <h4>{data.book.book_name}</h4>
                </div>
            </div>
            <div className="cart-item-unit">
                {data.book.discount !== 0 ? (
                    <span className="old-price">
                        {priceWithCommas(data.book.price)} đ
                    </span>
                ) : (
                    <></>
                )}
                <span>
                    {priceWithCommas(
                        Math.floor(
                            data.book.price * (1 - data.book.discount / 100)
                        )
                    )}
                    đ / 1
                </span>
            </div>
            <div className="cart-item-quantity">
                <button
                    onClick={() => handleDecrease(data)}
                    disabled={quantity === 1}>
                    <span>-</span>
                </button>
                <div>
                    <span>{data.quantity}</span>
                </div>
                <button
                    onClick={() => handleIncrease(data)}
                    disabled={quantity === data.book.in_stock}>
                    <span>+</span>
                </button>
            </div>
            <div className="cart-item-price">
                <span>
                    {priceWithCommas(
                        Math.ceil(
                            data.book.price *
                                (1 - data.book.discount / 100) *
                                quantity
                        )
                    )}{" "}
                    đ
                </span>
            </div>
            <div className="cart-item-delete-btn">
                <Button onClick={() => handleRemoveFromCart(data)}>Xoá</Button>
            </div>
        </div>
    );
}

export default CartItrem;
