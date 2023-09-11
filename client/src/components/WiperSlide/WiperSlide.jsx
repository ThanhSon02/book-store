/* eslint-disable react/prop-types */
import { Rating } from "@mui/material";
import "./WiperSlide.scss";
import { useNavigate } from "react-router-dom";
import priceWithCommas from "../../util/priceWithCommas";
function WiperSlide({
    bookId,
    img,
    title,
    author,
    currentRating,
    price,
    isNew = false,
    discount = 0,
}) {
    const navigate = useNavigate();
    const onWiperSlideClick = () => {
        navigate(`/detail/${bookId}`);
    };
    return (
        <div className="wiper-slide">
            {isNew ? <div className="badge">New</div> : <></>}
            <img
                className="wiper-book-img"
                src={img}
                alt="wiper 1"
                onClick={onWiperSlideClick}
            />
            <div style={{ marginTop: 10 }}>
                <h3 className="wiper-book-title" onClick={onWiperSlideClick}>
                    {title}
                </h3>
                <span className="wiper-book-author">{author}</span>
            </div>
            <div className="wiper-rating">
                <Rating size="small" readOnly value={currentRating} />
            </div>
            <div className="wiper-price">
                <p className="price">{priceWithCommas(price)}đ</p>
                {discount > 0 ? (
                    <span className="discount">-{discount}%</span>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}

export default WiperSlide;
