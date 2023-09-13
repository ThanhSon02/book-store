/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import { Button } from "antd";
import "./BookCard.scss";
import { useNavigate } from "react-router-dom";
import priceWithCommas from "../../util/priceWithCommas";

function BookCard({
    bookID,
    bookTitle = "",
    bookImg = "",
    bookAuthor = "",
    bookRating = 0,
    bookDesc = "",
    bookPrice = 0,
}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/detail/${bookID}`);
    };

    return (
        <div onClick={handleClick} className="book-card">
            <div onClick={handleClick} className="book-img">
                <img src={bookImg} />
            </div>
            <div className="book-card-info">
                <div onClick={handleClick} className="book-title">
                    <h3>{bookTitle}</h3>
                </div>
                <h3 className="book-author">
                    <a>{bookAuthor}</a>
                </h3>
                <div className="book-rating">
                    <Rating readOnly size="small" value={bookRating} />
                </div>
                <div className="book-desc">
                    <div dangerouslySetInnerHTML={{ __html: bookDesc }}></div>
                </div>
                <div className="book-card-price">
                    <span>{priceWithCommas(bookPrice)} đ</span>
                </div>
                <Button onClick={handleClick} className="book-card-btn">
                    Chi tiết
                </Button>
            </div>
        </div>
    );
}

export default BookCard;
