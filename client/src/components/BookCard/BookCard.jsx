import { Rating } from "@mui/material";
import { useState } from "react";
import "./BookCard.scss";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
function BookCart({ bookId, img, title, author, currentRating, price }) {
    const navigate = useNavigate();
    const [rating, setRating] = useState();
    const onBookCartClick = () => {
        navigate(`/detail/${bookId}`);
    };
    return (
        <div className="container">
            <img
                className="book-img"
                src={img}
                alt="book 1"
                onClick={onBookCartClick}
            />
            <h1 className="book-title" onClick={onBookCartClick}>
                {title}
            </h1>
            <span className="book-author">{author}</span>
            <div className="rating">
                <Rating
                    name="simple-controlled"
                    value={rating || currentRating}
                    onChange={(event, newRating) => {
                        setRating(newRating);
                    }}
                />
            </div>
            <p className="price">{price + "đ"}</p>
        </div>
    );
}

export default BookCart;
