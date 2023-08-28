import { Button } from "antd";

import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart, removeFromCart } from "../../redux/Slice/cartSlice";

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
        <div key={data.id} className="cart-list">
            <div className="cart-item">
                <div className="cart-item-product">
                    <img
                        className="cart-item-img"
                        src={data.bookImg}
                        width={80}
                        height={80}
                    />
                    <div className="cart-item-title">
                        <h4>{data.bookTitle}</h4>
                    </div>
                </div>
                <div className="cart-item-unit">
                    <span>{data.price} đ</span>
                    <span>
                        {Math.floor(data.price - (1 - data.discount / 100))} đ
                    </span>
                </div>
                <div className="cart-item-quantity">
                    <button
                        onClick={() => handleDecrease(data)}
                        disabled={data.quantity === 1}>
                        <span>-</span>
                    </button>
                    <div>
                        <span>{data.quantity}</span>
                    </div>
                    <button
                        onClick={() => handleIncrease(data)}
                        disabled={data.quantity >= data.stock}>
                        <span>+</span>
                    </button>
                </div>
                <div className="cart-item-price">
                    <span>
                        {Math.floor(data.price - (1 - data.discount / 100))} đ
                    </span>
                </div>
                <div className="cart-item-delete-btn">
                    <Button onClick={() => handleRemoveFromCart(data)}>
                        Xoá
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CartItrem;
