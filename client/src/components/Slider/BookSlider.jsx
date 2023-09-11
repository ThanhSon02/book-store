import { Link } from "react-router-dom";
import "./Slider.scss";
import Slider from "react-slick";
import WiperSlide from "../WiperSlide/WiperSlide";

/* eslint-disable react/prop-types */
function BookSlider({ title, configs, href, data }) {
    return (
        <div className="book-slider">
            <div className="book-slider-top">
                <h2 className="title">{title}</h2>
                <Link to={href} className="booklist-link">
                    Xem tất cả
                </Link>
            </div>
            <div className="slider-container">
                <Slider {...configs}>
                    {data.map((item) => (
                        <WiperSlide
                            key={item._id}
                            bookId={item._id}
                            img={item.book_img}
                            title={item.book_name}
                            author={item.author}
                            currentRating={item.rating}
                            price={item.price}
                            isNew={item.new_book}
                            discount={item.discount}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default BookSlider;
